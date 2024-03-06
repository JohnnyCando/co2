#!/bin/bash

# Temporary script to deploy code (waiting devops)
#
# Require integrate in devops process.


# [STEP 0]: Recover arguments

progname="${0##*/}"
usage="Usage: $progname -e <environment> -n"

while getopts ':e:' OPT
do
    case "$OPT" in
        e)      environment="$OPTARG" ;;
        ?)      echo "$usage" >&2; exit 1 ;;
    esac
done
shift $(($OPTIND - 1))

printf "[ENVIRONMENT]=%s \n" "$environment"

if [ "$environment" = "production" ] || [ "$environment" = "staging" ] || [ "$environment" = "development" ]
then
    aws_s3_bucket="acciona-energy-co2.backoffice.webapp.$environment"
    if [ $environment = "production" ]
    then
        aws_cloudfront_id="E360B8Q6QV50Q2"
    elif [ $environment = "staging" ]
    then
        aws_cloudfront_id="EU1A9SZXW5RCI"
    elif [ $environment = "development" ]
    then
        aws_cloudfront_id="E2UZSKF0UH2NKY"
    fi
else
    exit 0
fi

printf "[AWS_S3_BUCKET]=%s \n" "$aws_s3_bucket"
printf "[AWS_CLOUDFRONT_ID]=%s \n" "$aws_cloudfront_id"

# [STEP 1]: Build webapp
# > Require previous install (npm ci)
npm run build -- --configuration=$environment

# [STEP 2]: Upload build folder to s3_bucket
aws s3 sync --delete  dist/browser s3://$aws_s3_bucket --acl public-read --cache-control max-age=86400000,public
# aws s3 cp s3://$aws_s3_bucket s3://$aws_s3_bucket --recursive --include \"*.html\" --metadata-directive REPLACE --acl public-read --cache-control max-age=0,must-revalidate,public --content-type \"text/html; charset=utf-8\"

# [STEP 3]: Invalidation cloudfront cache
aws cloudfront create-invalidation --distribution-id $aws_cloudfront_id --paths "/*"


exit 0