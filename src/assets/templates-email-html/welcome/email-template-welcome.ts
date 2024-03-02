async function sendEmailWelcome(account_name,lang) {
    const date = await new Date();
    switch(lang){
        case 'es':
            const emailStringES = `<!DOCTYPE html
                PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
                    xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
                    <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
                    integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
                    crossorigin="anonymous" referrerpolicy="no-referrer" />
                    <meta name=x-apple-disable-message-reformatting>
                <meta http-equiv=X-UA-Compatible>
                <meta charset=utf-8>
                <meta name=viewport content=target-densitydpi=device-dpi>
                <meta content=true name=HandheldFriendly>
                <meta content=width=device-width name=viewport>
                <style type="text/css">
                table {
                    border-collapse: separate;
                    table-layout: fixed;
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt
                    }
    
                table td {
                    border-collapse: collapse
                }
    
                .ExternalClass {
                width: 100%
                }
    
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
            line-height: 100%
        }
    
        * {
            line-height: inherit;
            text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
            -moz-text-size-adjust: 100%;
            -o-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale
        }
    
        html {
            -webkit-text-size-adjust: none !important
        }
    
        img+div {
            display: none;
            display: none !important
        }
    
        img {
            Margin: 0;
            padding: 0;
            -ms-interpolation-mode: bicubic
        }
    
        h1,
        h2,
        h3,
        p,
        a {
            line-height: 1;
            overflow-wrap: normal;
            white-space: normal;
            word-break: break-word
        }
    
        a {
            text-decoration: none
        }
    
        h1,
        h2,
        h3,
        p {
            min-width: 100% !important;
            width: 100% !important;
            max-width: 100% !important;
            display: inline-block !important;
            border: 0;
            padding: 0;
            margin: 0
        }
    
        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important
        }
    
        a[href^="mailto"],
        a[href^="tel"],
        a[href^="sms"] {
            color: inherit;
            text-decoration: none
        }
    
        @media (min-width: 481px) {
            .hd {
                display: none !important
            }
        }
    
        @media (max-width: 480px) {
            .hm {
                display: none !important
            }
        }
    
        [style*="Albert Sans"] {
            font-family: 'Albert Sans', BlinkMacSystemFont, Segoe UI, Helvetica Neue, Arial, sans-serif !important;
        }
        @media only screen and (max-width:570px){
            .t155, .t145 {
                font-size: 14px;
            }
        }
        @media only screen and (min-width: 481px) {
            .t3 {
                mso-line-height-alt: 45px !important;
                line-height: 45px !important;
                display: block !important
            }
    
            .t9 {
                padding-left: 50px !important;
                padding-bottom: 60px !important;
                padding-right: 50px !important
            }
    
            .t11 {
                padding-left: 50px !important;
                padding-bottom: 60px !important;
                padding-right: 50px !important;
                width: 500px !important
            }
    
            .t15,
            .t23 {
                width: 250px !important
            }
    
            .t27,
            .t32 {
                padding-bottom: 25px !important
            }
    
            .t33 {
                line-height: 41px !important;
                font-size: 39px !important;
                letter-spacing: -1.56px !important
            }
    
            .t40 {
                padding: 48px 50px !important
            }
    
            .t42 {
                padding: 48px 50px !important;
                width: 500px !important
            }
    
            .t56,
            .t61 {
                padding-bottom: 44px !important
            }
    
            .t139,
            .t144 {
                padding-bottom: 45px !important
            }
    
            .t159 {
                padding-bottom: 60px !important;
                width: 130px !important
            }
    
            .t164 {
                padding-bottom: 60px !important
            }
        }
    </style>
    
    <link href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@500;700;800&display=swap" rel="stylesheet"
        type="text/css">
    </head>
    
    <body class=t0 style="min-width:100%;Margin:0px;padding:0px;background-color:#242424;">
    <div class=t1 style="background-color:#242424;">
        <table role=presentation width=100% cellpadding=0 cellspacing=0 border=0 align=center>
            <tr>
                <td class=t166 style="font-size:0;line-height:0;mso-line-height-rule:exactly;" valign=top align=center>
    
                    <table role=presentation width=100% cellpadding=0 cellspacing=0 border=0 align=center>
                        <tr>
                            <td>
                                <div class=t3 style="mso-line-height-rule:exactly;font-size:1px;display:none;">&nbsp;
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table class=t10 role=presentation cellpadding=0 cellspacing=0 align=center>
                                    <tr>
    
                                        <td class=t11
                                            style="background-color:#F8F8F8;overflow:hidden;width:540px;padding:0 30px 40px 30px;">
    
                                            <table role=presentation width=100%>
                                                <tr>
                                                    <td>
                                                        <table class=t158 role=presentation width="100%" align=center>
                                                            <tr>
    
                                                                <td style="width:100%;">
                                                                    <div style="font-size:0px;"><img class=t165
                                                                            style="display:block;border:0;Margin:0;"
                                                                            width="100%" height="100%"
                                                                            src="https://pluspng.com/img-png/logo-acciona-png-from-wikipedia-the-free-encyclopedia-1280.png" />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table class=t26 role=presentation cellpadding=0 cellspacing=0
                                                            align=center>
                                                            <tr>
                                                                <td class=t27 style="width:600px;padding:0 0 20px 0;">
                                                                    <span class=t33
                                                                        style="margin-bottom:0;Margin-bottom:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:28px;font-weight:800;font-style:normal;font-size:26px;text-decoration:none;text-transform:none;letter-spacing:-1.04px;direction:ltr;color:#191919;text-align:center;mso-line-height-rule:exactly;mso-text-raise:1px;">
                                                                        <p>
                                                                       <h4>Bienvenidos a Huella CO2</h4>
                                                                       </p>
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table class=t148 role=presentation cellpadding=0 cellspacing=0
                                                            align=center>
                                                            <tr>
                                                                <td class=t149 style="width:600px;padding:0 0 22px 0;">
                                                                    <p class=t155
                                                                        style="margin-bottom:0;Margin-bottom:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:20px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
                                                                        Enhorabuena <b>${account_name}</b> cuenta creada exitosamente.</p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table class=t138 role=presentation cellpadding=0 cellspacing=0
                                                            align=center>
                                                            <tr>
                                                                <td class=t139 style="width:600px;padding:0 0 34px 0;">
                                                                    <p class=t145
                                                                        style="margin-bottom:0;Margin-bottom:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:20px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
                                                                        Gracias por confiar Acciona - Huella CO2, te aseguramos que tendras una experiencia sin igual. </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <!--  <td>
                                                        <table class=t14 role=presentation cellpadding=0 cellspacing=0
                                                            align=left>
                                                            <tr>
                                                                <td class=t15
                                                                    style="background-color:#181818;overflow:hidden;width:353px;text-align:center;line-height:44px;mso-line-height-rule:exactly;mso-text-raise:10px;border-radius:44px 44px 44px 44px;">
                                                                     <span class=t21
                                                                        style="display:block;margin-bottom:0;Margin-bottom:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:44px;font-weight:800;font-style:normal;font-size:12px;text-decoration:none;text-transform:uppercase;letter-spacing:2.4px;direction:ltr;color:#F8F8F8;text-align:center;mso-line-height-rule:exactly;mso-text-raise:10px;"
                                                                        target=_blank>SEND US A MESSAGE</span>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>-->
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table class=t41 role=presentation cellpadding=0 cellspacing=0 align=center>
                                    <tr>
                                        <td class=t42 style="overflow:hidden;width:540px;padding:40px 30px 40px 30px;">
                                            <table role=presentation width=100% cellpadding=0 cellspacing=0>
                                                <tr>
                                                    <td>
                                                        <table class=t45 role=presentation cellpadding=0 cellspacing=0
                                                            align=center>
                                                            <tr>
    
                                                                <td class=t46 style="width:600px;">
                                                                    <p class=t52
                                                                        style="margin-bottom:0;Margin-bottom:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:800;font-style:normal;font-size:18px;text-decoration:none;text-transform:none;letter-spacing:-0.9px;direction:ltr;color:#757575;text-align:center;mso-line-height-rule:exactly;mso-text-raise:1px;">
                                                                        ¿Quiere actualizaciones a través de más
                                                                        plataformas?</p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table class=t55 role=presentation cellpadding=0 cellspacing=0
                                                            align=center>
                                                            <tr>
    
                                                                <td class=t56
                                                                    style="overflow:hidden;width:800px;padding:10px 0 36px 0;">
                                                                    <div class=t62
                                                                        style="display:inline-table;width:100%;text-align:center;vertical-align:top;">
                                                                        <!--<div class=t68
                                                                            style="display:inline-table;text-align:initial;vertical-align:inherit;width:20%;max-width:44px;">
                                                                            <div class=t69
                                                                                style="padding:0 10px 0 10px;">
                                                                                <table role=presentation width=100%
                                                                                    cellpadding=0 cellspacing=0
                                                                                    class=t70>
                                                                                    <tr>
                                                                                        <td class=t71>
                                                                                            <div style="font-size:0px;">
                                                                                                <img class=t72
                                                                                                    style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;"
                                                                                                    width=24 height=24
                                                                                                    src=https://uploads.tabular.email/e/2feb9749-6369-44a9-90e9-1c26bf36c1a5/90e14628-2d8f-4c64-af7a-410b0a53d60c.png />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                        </div> -->
                                                                        <div class=t108
                                                                            style="display:inline-table;text-align:initial;vertical-align:inherit;width:50px;">
                                                                            <div class=t109
                                                                                style="padding:0 10px 0 10px;">
                                                                                <table role=presentation width=100%
                                                                                    cellpadding=0 cellspacing=0
                                                                                    class=t110>
                                                                                    <tr>
                                                                                        <td class=t111>
                                                                                            <div style="font-size:0px;">
                                                                                                <a class=t133
                                                                                                    href=https://discord.gg/XGjJGadttz 
                                                                                                    target=_blank>
                                                                                                    <img
                                                                                                        class=t112
                                                                                                        style="display:block;border:0;Margin:0;"
                                                                                                        width=33
                                                                                                        height=27
                                                                                                        src="http://drive.google.com/uc?export=view&id=1pRd8W-syqerRAs3VMJt1wODpC36R-Yn-" /></a>
    
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                        <div class=t98
                                                                            style="display:inline-table;text-align:initial;vertical-align:inherit;width:20%;max-width:44px;">
                                                                            <div class=t99
                                                                                style="padding:0 10px 0 10px;">
                                                                                <table role=presentation width=100%
                                                                                    cellpadding=0 cellspacing=0
                                                                                    class=t100>
                                                                                    <tr>
                                                                                        <td class=t101>
                                                                                            <div style="font-size:0px;">
                                                                                                <a class=t133
                                                                                                    href=https://www.youtube.com/@GFMemories
                                                                                                    target=_blank>
                                                                                                    <img
                                                                                                        class=t102
                                                                                                        style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;"
                                                                                                        width=24
                                                                                                        height=24
                                                                                                        src=https://uploads.tabular.email/e/b158fd0c-1d9a-41bb-885b-099af24afa59/b6f1e7ce-8c7b-41ee-b453-746aaf5e9b57.png /></a>
    
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                        <div class=t88
                                                                            style="display:inline-table;text-align:initial;vertical-align:inherit;width:20%;max-width:44px;">
                                                                            <div class=t89
                                                                                style="padding:0 10px 0 10px;">
                                                                                <table role=presentation width=100%
                                                                                    cellpadding=0 cellspacing=0
                                                                                    class=t90>
                                                                                    <tr>
                                                                                        <td class=t91>
                                                                                            <div style="font-size:0px;">
                                                                                                <a class=t133
                                                                                                    href=https://www.twitch.tv/gfmemories
                                                                                                    target=_blank>
                                                                                                    <img class=t92
                                                                                                        style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;"
                                                                                                        width=24
                                                                                                        height=24
                                                                                                        src="http://drive.google.com/uc?export=view&id=16LTlqTySLWNCPfccVg-rKDJPxQb9LiaD" />
                                                                                                </a>
    
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                        <!--<div class=t78
                                                                            style="display:inline-table;text-align:initial;vertical-align:inherit;width:20%;max-width:44px;">
                                                                            <div class=t79
                                                                                style="padding:0 10px 0 10px;">
                                                                                <table role=presentation width=100%
                                                                                    cellpadding=0 cellspacing=0
                                                                                    class=t80>
                                                                                    <tr>
                                                                                        <td class=t81>
                                                                                            <div style="font-size:0px;">
                                                                                                <img class=t82
                                                                                                    style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;"
                                                                                                    width=24 height=24
                                                                                                    src=https://uploads.tabular.email/e/b158fd0c-1d9a-41bb-885b-099af24afa59/8e37593e-8033-4bc9-9fee-951849506678.png />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                        </div> -->
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table class=t125 role=presentation cellpadding=0 cellspacing=0
                                                            align=center>
                                                            <tr>
    
                                                                <td class=t126 style="width:600px;">
                                                                    <p class=t132
                                                                        style="margin-bottom:0;Margin-bottom:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;direction:ltr;color:#888888;text-align:center;mso-line-height-rule:exactly;mso-text-raise:3px;">
                                                                        &copy; ${date.getFullYear()} Acciona SA. All rights reserved.</p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table class=t115 role=presentation cellpadding=0 cellspacing=0
                                                            align=center>
                                                            <tr>
    
                                                                <td class=t116 style="width:600px;">
                                                                    <p class=t122
                                                                        style="margin-bottom:0;Margin-bottom:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;direction:ltr;color:#888888;text-align:center;mso-line-height-rule:exactly;mso-text-raise:3px;">
                                                                        <a class=t133
                                                                            href=https://www.youtube.com/@GFMemories
                                                                            style="margin-bottom:0;Margin-bottom:0;font-weight:700;font-style:normal;text-decoration:none;direction:ltr;color:#888888;mso-line-height-rule:exactly;"
                                                                            target=_blank>subscribe</a>  •  <a
                                                                            class=t134 href=#
                                                                            style="margin-bottom:0;Margin-bottom:0;font-weight:700;font-style:normal;text-decoration:none;direction:ltr;color:#888888;mso-line-height-rule:exactly;"
                                                                            target=_blank>Privacy policy</a>  •  <a
                                                                            class=t135 href=#
                                                                            style="margin-bottom:0;Margin-bottom:0;font-weight:700;font-style:normal;text-decoration:none;direction:ltr;color:#878787;mso-line-height-rule:exactly;"
                                                                            target=_blank>Contáctanos</a>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </div>
    </body>
    
    </html>`;
    return await emailStringES;
        case 'en':
            const emailStringEN = `<!DOCTYPE html
                PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
                    xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
                    <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
                    integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
                    crossorigin="anonymous" referrerpolicy="no-referrer" />
                    <meta name=x-apple-disable-message-reformatting>
                <meta http-equiv=X-UA-Compatible>
                <meta charset=utf-8>
                <meta name=viewport content=target-densitydpi=device-dpi>
                <meta content=true name=HandheldFriendly>
                <meta content=width=device-width name=viewport>
                <style type="text/css">
                table {
                    border-collapse: separate;
                    table-layout: fixed;
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt
                    }
    
                table td {
                    border-collapse: collapse
                }
    
                .ExternalClass {
                width: 100%
                }
    
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
            line-height: 100%
        }
    
        * {
            line-height: inherit;
            text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
            -moz-text-size-adjust: 100%;
            -o-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale
        }
    
        html {
            -webkit-text-size-adjust: none !important
        }
    
        img+div {
            display: none;
            display: none !important
        }
    
        img {
            Margin: 0;
            padding: 0;
            -ms-interpolation-mode: bicubic
        }
    
        h1,
        h2,
        h3,
        p,
        a {
            line-height: 1;
            overflow-wrap: normal;
            white-space: normal;
            word-break: break-word
        }
    
        a {
            text-decoration: none
        }
    
        h1,
        h2,
        h3,
        p {
            min-width: 100% !important;
            width: 100% !important;
            max-width: 100% !important;
            display: inline-block !important;
            border: 0;
            padding: 0;
            margin: 0
        }
    
        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important
        }
    
        a[href^="mailto"],
        a[href^="tel"],
        a[href^="sms"] {
            color: inherit;
            text-decoration: none
        }
    
        @media (min-width: 481px) {
            .hd {
                display: none !important
            }
        }
    
        @media (max-width: 480px) {
            .hm {
                display: none !important
            }
        }
    
        [style*="Albert Sans"] {
            font-family: 'Albert Sans', BlinkMacSystemFont, Segoe UI, Helvetica Neue, Arial, sans-serif !important;
        }
        @media only screen and (max-width:570px){
            .t155, .t145 {
                font-size: 14px;
            }
        }
        @media only screen and (min-width: 481px) {
            .t3 {
                mso-line-height-alt: 45px !important;
                line-height: 45px !important;
                display: block !important
            }
    
            .t9 {
                padding-left: 50px !important;
                padding-bottom: 60px !important;
                padding-right: 50px !important
            }
    
            .t11 {
                padding-left: 50px !important;
                padding-bottom: 60px !important;
                padding-right: 50px !important;
                width: 500px !important
            }
    
            .t15,
            .t23 {
                width: 250px !important
            }
    
            .t27,
            .t32 {
                padding-bottom: 25px !important
            }
    
            .t33 {
                line-height: 41px !important;
                font-size: 39px !important;
                letter-spacing: -1.56px !important
            }
    
            .t40 {
                padding: 48px 50px !important
            }
    
            .t42 {
                padding: 48px 50px !important;
                width: 500px !important
            }
    
            .t56,
            .t61 {
                padding-bottom: 44px !important
            }
    
            .t139,
            .t144 {
                padding-bottom: 45px !important
            }
    
            .t159 {
                padding-bottom: 60px !important;
                width: 130px !important
            }
    
            .t164 {
                padding-bottom: 60px !important
            }
        }
    </style>
    
    <link href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@500;700;800&display=swap" rel="stylesheet"
        type="text/css">
    </head>
    
    <body class=t0 style="min-width:100%;Margin:0px;padding:0px;background-color:#242424;">
    <div class=t1 style="background-color:#242424;">
        <table role=presentation width=100% cellpadding=0 cellspacing=0 border=0 align=center>
            <tr>
                <td class=t166 style="font-size:0;line-height:0;mso-line-height-rule:exactly;" valign=top align=center>
    
                    <table role=presentation width=100% cellpadding=0 cellspacing=0 border=0 align=center>
                        <tr>
                            <td>
                                <div class=t3 style="mso-line-height-rule:exactly;font-size:1px;display:none;">&nbsp;
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table class=t10 role=presentation cellpadding=0 cellspacing=0 align=center>
                                    <tr>
    
                                        <td class=t11
                                            style="background-color:#F8F8F8;overflow:hidden;width:540px;padding:0 30px 40px 30px;">
    
                                            <table role=presentation width=100%>
                                                <tr>
                                                    <td>
                                                        <table class=t158 role=presentation width="100%" align=center>
                                                            <tr>
    
                                                                <td style="width:100%;">
                                                                    <div style="font-size:0px;"><img class=t165
                                                                            style="display:block;border:0;Margin:0;"
                                                                            width="100%" height="100%"
                                                                            src="https://pluspng.com/img-png/logo-acciona-png-from-wikipedia-the-free-encyclopedia-1280.png" />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table class=t26 role=presentation cellpadding=0 cellspacing=0
                                                            align=center>
                                                            <tr>
                                                                <td class=t27 style="width:600px;padding:0 0 20px 0;">
                                                                    <span class=t33
                                                                        style="margin-bottom:0;Margin-bottom:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:28px;font-weight:800;font-style:normal;font-size:26px;text-decoration:none;text-transform:none;letter-spacing:-1.04px;direction:ltr;color:#191919;text-align:center;mso-line-height-rule:exactly;mso-text-raise:1px;">
                                                                        <p>
                                                                       <h4>Bienvenidos a Huella CO2</h4>
                                                                       </p>
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table class=t148 role=presentation cellpadding=0 cellspacing=0
                                                            align=center>
                                                            <tr>
                                                                <td class=t149 style="width:600px;padding:0 0 22px 0;">
                                                                    <p class=t155
                                                                        style="margin-bottom:0;Margin-bottom:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:20px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
                                                                        Enhorabuena <b>${account_name}</b> cuenta creada exitosamente.</p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table class=t138 role=presentation cellpadding=0 cellspacing=0
                                                            align=center>
                                                            <tr>
                                                                <td class=t139 style="width:600px;padding:0 0 34px 0;">
                                                                    <p class=t145
                                                                        style="margin-bottom:0;Margin-bottom:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:20px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
                                                                        Gracias por confiar Acciona - Huella CO2, te aseguramos que tendras una experiencia sin igual. </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <!--  <td>
                                                        <table class=t14 role=presentation cellpadding=0 cellspacing=0
                                                            align=left>
                                                            <tr>
                                                                <td class=t15
                                                                    style="background-color:#181818;overflow:hidden;width:353px;text-align:center;line-height:44px;mso-line-height-rule:exactly;mso-text-raise:10px;border-radius:44px 44px 44px 44px;">
                                                                     <span class=t21
                                                                        style="display:block;margin-bottom:0;Margin-bottom:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:44px;font-weight:800;font-style:normal;font-size:12px;text-decoration:none;text-transform:uppercase;letter-spacing:2.4px;direction:ltr;color:#F8F8F8;text-align:center;mso-line-height-rule:exactly;mso-text-raise:10px;"
                                                                        target=_blank>SEND US A MESSAGE</span>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>-->
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table class=t41 role=presentation cellpadding=0 cellspacing=0 align=center>
                                    <tr>
                                        <td class=t42 style="overflow:hidden;width:540px;padding:40px 30px 40px 30px;">
                                            <table role=presentation width=100% cellpadding=0 cellspacing=0>
                                                <tr>
                                                    <td>
                                                        <table class=t45 role=presentation cellpadding=0 cellspacing=0
                                                            align=center>
                                                            <tr>
    
                                                                <td class=t46 style="width:600px;">
                                                                    <p class=t52
                                                                        style="margin-bottom:0;Margin-bottom:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:800;font-style:normal;font-size:18px;text-decoration:none;text-transform:none;letter-spacing:-0.9px;direction:ltr;color:#757575;text-align:center;mso-line-height-rule:exactly;mso-text-raise:1px;">
                                                                        ¿Quiere actualizaciones a través de más
                                                                        plataformas?</p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table class=t55 role=presentation cellpadding=0 cellspacing=0
                                                            align=center>
                                                            <tr>
    
                                                                <td class=t56
                                                                    style="overflow:hidden;width:800px;padding:10px 0 36px 0;">
                                                                    <div class=t62
                                                                        style="display:inline-table;width:100%;text-align:center;vertical-align:top;">
                                                                        <!--<div class=t68
                                                                            style="display:inline-table;text-align:initial;vertical-align:inherit;width:20%;max-width:44px;">
                                                                            <div class=t69
                                                                                style="padding:0 10px 0 10px;">
                                                                                <table role=presentation width=100%
                                                                                    cellpadding=0 cellspacing=0
                                                                                    class=t70>
                                                                                    <tr>
                                                                                        <td class=t71>
                                                                                            <div style="font-size:0px;">
                                                                                                <img class=t72
                                                                                                    style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;"
                                                                                                    width=24 height=24
                                                                                                    src=https://uploads.tabular.email/e/2feb9749-6369-44a9-90e9-1c26bf36c1a5/90e14628-2d8f-4c64-af7a-410b0a53d60c.png />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                        </div> -->
                                                                        <div class=t108
                                                                            style="display:inline-table;text-align:initial;vertical-align:inherit;width:50px;">
                                                                            <div class=t109
                                                                                style="padding:0 10px 0 10px;">
                                                                                <table role=presentation width=100%
                                                                                    cellpadding=0 cellspacing=0
                                                                                    class=t110>
                                                                                    <tr>
                                                                                        <td class=t111>
                                                                                            <div style="font-size:0px;">
                                                                                                <a class=t133
                                                                                                    href=https://discord.gg/XGjJGadttz 
                                                                                                    target=_blank>
                                                                                                    <img
                                                                                                        class=t112
                                                                                                        style="display:block;border:0;Margin:0;"
                                                                                                        width=33
                                                                                                        height=27
                                                                                                        src="http://drive.google.com/uc?export=view&id=1pRd8W-syqerRAs3VMJt1wODpC36R-Yn-" /></a>
    
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                        <div class=t98
                                                                            style="display:inline-table;text-align:initial;vertical-align:inherit;width:20%;max-width:44px;">
                                                                            <div class=t99
                                                                                style="padding:0 10px 0 10px;">
                                                                                <table role=presentation width=100%
                                                                                    cellpadding=0 cellspacing=0
                                                                                    class=t100>
                                                                                    <tr>
                                                                                        <td class=t101>
                                                                                            <div style="font-size:0px;">
                                                                                                <a class=t133
                                                                                                    href=https://www.youtube.com/@GFMemories
                                                                                                    target=_blank>
                                                                                                    <img
                                                                                                        class=t102
                                                                                                        style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;"
                                                                                                        width=24
                                                                                                        height=24
                                                                                                        src=https://uploads.tabular.email/e/b158fd0c-1d9a-41bb-885b-099af24afa59/b6f1e7ce-8c7b-41ee-b453-746aaf5e9b57.png /></a>
    
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                        <div class=t88
                                                                            style="display:inline-table;text-align:initial;vertical-align:inherit;width:20%;max-width:44px;">
                                                                            <div class=t89
                                                                                style="padding:0 10px 0 10px;">
                                                                                <table role=presentation width=100%
                                                                                    cellpadding=0 cellspacing=0
                                                                                    class=t90>
                                                                                    <tr>
                                                                                        <td class=t91>
                                                                                            <div style="font-size:0px;">
                                                                                                <a class=t133
                                                                                                    href=https://www.twitch.tv/gfmemories
                                                                                                    target=_blank>
                                                                                                    <img class=t92
                                                                                                        style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;"
                                                                                                        width=24
                                                                                                        height=24
                                                                                                        src="http://drive.google.com/uc?export=view&id=16LTlqTySLWNCPfccVg-rKDJPxQb9LiaD" />
                                                                                                </a>
    
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                        <!--<div class=t78
                                                                            style="display:inline-table;text-align:initial;vertical-align:inherit;width:20%;max-width:44px;">
                                                                            <div class=t79
                                                                                style="padding:0 10px 0 10px;">
                                                                                <table role=presentation width=100%
                                                                                    cellpadding=0 cellspacing=0
                                                                                    class=t80>
                                                                                    <tr>
                                                                                        <td class=t81>
                                                                                            <div style="font-size:0px;">
                                                                                                <img class=t82
                                                                                                    style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;"
                                                                                                    width=24 height=24
                                                                                                    src=https://uploads.tabular.email/e/b158fd0c-1d9a-41bb-885b-099af24afa59/8e37593e-8033-4bc9-9fee-951849506678.png />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                        </div> -->
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table class=t125 role=presentation cellpadding=0 cellspacing=0
                                                            align=center>
                                                            <tr>
    
                                                                <td class=t126 style="width:600px;">
                                                                    <p class=t132
                                                                        style="margin-bottom:0;Margin-bottom:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;direction:ltr;color:#888888;text-align:center;mso-line-height-rule:exactly;mso-text-raise:3px;">
                                                                        &copy; ${date.getFullYear()} Acciona SA. All rights reserved.</p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table class=t115 role=presentation cellpadding=0 cellspacing=0
                                                            align=center>
                                                            <tr>
    
                                                                <td class=t116 style="width:600px;">
                                                                    <p class=t122
                                                                        style="margin-bottom:0;Margin-bottom:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;direction:ltr;color:#888888;text-align:center;mso-line-height-rule:exactly;mso-text-raise:3px;">
                                                                        <a class=t133
                                                                            href=https://www.youtube.com/@GFMemories
                                                                            style="margin-bottom:0;Margin-bottom:0;font-weight:700;font-style:normal;text-decoration:none;direction:ltr;color:#888888;mso-line-height-rule:exactly;"
                                                                            target=_blank>subscribe</a>  •  <a
                                                                            class=t134 href=#
                                                                            style="margin-bottom:0;Margin-bottom:0;font-weight:700;font-style:normal;text-decoration:none;direction:ltr;color:#888888;mso-line-height-rule:exactly;"
                                                                            target=_blank>Privacy policy</a>  •  <a
                                                                            class=t135 href=#
                                                                            style="margin-bottom:0;Margin-bottom:0;font-weight:700;font-style:normal;text-decoration:none;direction:ltr;color:#878787;mso-line-height-rule:exactly;"
                                                                            target=_blank>Contáctanos</a>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </div>
    </body>
    
    </html>`;
    return await emailStringEN;
        case 'ca':
            const emailStringCat = `<!DOCTYPE html
                PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
                    xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
                    <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
                    integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
                    crossorigin="anonymous" referrerpolicy="no-referrer" />
                    <meta name=x-apple-disable-message-reformatting>
                <meta http-equiv=X-UA-Compatible>
                <meta charset=utf-8>
                <meta name=viewport content=target-densitydpi=device-dpi>
                <meta content=true name=HandheldFriendly>
                <meta content=width=device-width name=viewport>
                <style type="text/css">
                table {
                    border-collapse: separate;
                    table-layout: fixed;
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt
                    }
    
                table td {
                    border-collapse: collapse
                }
    
                .ExternalClass {
                width: 100%
                }
    
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
            line-height: 100%
        }
    
        * {
            line-height: inherit;
            text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
            -moz-text-size-adjust: 100%;
            -o-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale
        }
    
        html {
            -webkit-text-size-adjust: none !important
        }
    
        img+div {
            display: none;
            display: none !important
        }
    
        img {
            Margin: 0;
            padding: 0;
            -ms-interpolation-mode: bicubic
        }
    
        h1,
        h2,
        h3,
        p,
        a {
            line-height: 1;
            overflow-wrap: normal;
            white-space: normal;
            word-break: break-word
        }
    
        a {
            text-decoration: none
        }
    
        h1,
        h2,
        h3,
        p {
            min-width: 100% !important;
            width: 100% !important;
            max-width: 100% !important;
            display: inline-block !important;
            border: 0;
            padding: 0;
            margin: 0
        }
    
        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important
        }
    
        a[href^="mailto"],
        a[href^="tel"],
        a[href^="sms"] {
            color: inherit;
            text-decoration: none
        }
    
        @media (min-width: 481px) {
            .hd {
                display: none !important
            }
        }
    
        @media (max-width: 480px) {
            .hm {
                display: none !important
            }
        }
    
        [style*="Albert Sans"] {
            font-family: 'Albert Sans', BlinkMacSystemFont, Segoe UI, Helvetica Neue, Arial, sans-serif !important;
        }
        @media only screen and (max-width:570px){
            .t155, .t145 {
                font-size: 14px;
            }
        }
        @media only screen and (min-width: 481px) {
            .t3 {
                mso-line-height-alt: 45px !important;
                line-height: 45px !important;
                display: block !important
            }
    
            .t9 {
                padding-left: 50px !important;
                padding-bottom: 60px !important;
                padding-right: 50px !important
            }
    
            .t11 {
                padding-left: 50px !important;
                padding-bottom: 60px !important;
                padding-right: 50px !important;
                width: 500px !important
            }
    
            .t15,
            .t23 {
                width: 250px !important
            }
    
            .t27,
            .t32 {
                padding-bottom: 25px !important
            }
    
            .t33 {
                line-height: 41px !important;
                font-size: 39px !important;
                letter-spacing: -1.56px !important
            }
    
            .t40 {
                padding: 48px 50px !important
            }
    
            .t42 {
                padding: 48px 50px !important;
                width: 500px !important
            }
    
            .t56,
            .t61 {
                padding-bottom: 44px !important
            }
    
            .t139,
            .t144 {
                padding-bottom: 45px !important
            }
    
            .t159 {
                padding-bottom: 60px !important;
                width: 130px !important
            }
    
            .t164 {
                padding-bottom: 60px !important
            }
        }
    </style>
    
    <link href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@500;700;800&display=swap" rel="stylesheet"
        type="text/css">
    </head>
    
    <body class=t0 style="min-width:100%;Margin:0px;padding:0px;background-color:#242424;">
    <div class=t1 style="background-color:#242424;">
        <table role=presentation width=100% cellpadding=0 cellspacing=0 border=0 align=center>
            <tr>
                <td class=t166 style="font-size:0;line-height:0;mso-line-height-rule:exactly;" valign=top align=center>
    
                    <table role=presentation width=100% cellpadding=0 cellspacing=0 border=0 align=center>
                        <tr>
                            <td>
                                <div class=t3 style="mso-line-height-rule:exactly;font-size:1px;display:none;">&nbsp;
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table class=t10 role=presentation cellpadding=0 cellspacing=0 align=center>
                                    <tr>
    
                                        <td class=t11
                                            style="background-color:#F8F8F8;overflow:hidden;width:540px;padding:0 30px 40px 30px;">
    
                                            <table role=presentation width=100%>
                                                <tr>
                                                    <td>
                                                        <table class=t158 role=presentation width="100%" align=center>
                                                            <tr>
    
                                                                <td style="width:100%;">
                                                                    <div style="font-size:0px;"><img class=t165
                                                                            style="display:block;border:0;Margin:0;"
                                                                            width="100%" height="100%"
                                                                            src="https://pluspng.com/img-png/logo-acciona-png-from-wikipedia-the-free-encyclopedia-1280.png" />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table class=t26 role=presentation cellpadding=0 cellspacing=0
                                                            align=center>
                                                            <tr>
                                                                <td class=t27 style="width:600px;padding:0 0 20px 0;">
                                                                    <span class=t33
                                                                        style="margin-bottom:0;Margin-bottom:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:28px;font-weight:800;font-style:normal;font-size:26px;text-decoration:none;text-transform:none;letter-spacing:-1.04px;direction:ltr;color:#191919;text-align:center;mso-line-height-rule:exactly;mso-text-raise:1px;">
                                                                        <p>
                                                                       <h4>Bienvenidos a Huella CO2</h4>
                                                                       </p>
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table class=t148 role=presentation cellpadding=0 cellspacing=0
                                                            align=center>
                                                            <tr>
                                                                <td class=t149 style="width:600px;padding:0 0 22px 0;">
                                                                    <p class=t155
                                                                        style="margin-bottom:0;Margin-bottom:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:20px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
                                                                        Enhorabuena <b>${account_name}</b> cuenta creada exitosamente.</p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table class=t138 role=presentation cellpadding=0 cellspacing=0
                                                            align=center>
                                                            <tr>
                                                                <td class=t139 style="width:600px;padding:0 0 34px 0;">
                                                                    <p class=t145
                                                                        style="margin-bottom:0;Margin-bottom:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:20px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
                                                                        Gracias por confiar Acciona - Huella CO2, te aseguramos que tendras una experiencia sin igual. </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <!--  <td>
                                                        <table class=t14 role=presentation cellpadding=0 cellspacing=0
                                                            align=left>
                                                            <tr>
                                                                <td class=t15
                                                                    style="background-color:#181818;overflow:hidden;width:353px;text-align:center;line-height:44px;mso-line-height-rule:exactly;mso-text-raise:10px;border-radius:44px 44px 44px 44px;">
                                                                     <span class=t21
                                                                        style="display:block;margin-bottom:0;Margin-bottom:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:44px;font-weight:800;font-style:normal;font-size:12px;text-decoration:none;text-transform:uppercase;letter-spacing:2.4px;direction:ltr;color:#F8F8F8;text-align:center;mso-line-height-rule:exactly;mso-text-raise:10px;"
                                                                        target=_blank>SEND US A MESSAGE</span>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>-->
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table class=t41 role=presentation cellpadding=0 cellspacing=0 align=center>
                                    <tr>
                                        <td class=t42 style="overflow:hidden;width:540px;padding:40px 30px 40px 30px;">
                                            <table role=presentation width=100% cellpadding=0 cellspacing=0>
                                                <tr>
                                                    <td>
                                                        <table class=t45 role=presentation cellpadding=0 cellspacing=0
                                                            align=center>
                                                            <tr>
    
                                                                <td class=t46 style="width:600px;">
                                                                    <p class=t52
                                                                        style="margin-bottom:0;Margin-bottom:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:800;font-style:normal;font-size:18px;text-decoration:none;text-transform:none;letter-spacing:-0.9px;direction:ltr;color:#757575;text-align:center;mso-line-height-rule:exactly;mso-text-raise:1px;">
                                                                        ¿Quiere actualizaciones a través de más
                                                                        plataformas?</p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table class=t55 role=presentation cellpadding=0 cellspacing=0
                                                            align=center>
                                                            <tr>
    
                                                                <td class=t56
                                                                    style="overflow:hidden;width:800px;padding:10px 0 36px 0;">
                                                                    <div class=t62
                                                                        style="display:inline-table;width:100%;text-align:center;vertical-align:top;">
                                                                        <!--<div class=t68
                                                                            style="display:inline-table;text-align:initial;vertical-align:inherit;width:20%;max-width:44px;">
                                                                            <div class=t69
                                                                                style="padding:0 10px 0 10px;">
                                                                                <table role=presentation width=100%
                                                                                    cellpadding=0 cellspacing=0
                                                                                    class=t70>
                                                                                    <tr>
                                                                                        <td class=t71>
                                                                                            <div style="font-size:0px;">
                                                                                                <img class=t72
                                                                                                    style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;"
                                                                                                    width=24 height=24
                                                                                                    src=https://uploads.tabular.email/e/2feb9749-6369-44a9-90e9-1c26bf36c1a5/90e14628-2d8f-4c64-af7a-410b0a53d60c.png />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                        </div> -->
                                                                        <div class=t108
                                                                            style="display:inline-table;text-align:initial;vertical-align:inherit;width:50px;">
                                                                            <div class=t109
                                                                                style="padding:0 10px 0 10px;">
                                                                                <table role=presentation width=100%
                                                                                    cellpadding=0 cellspacing=0
                                                                                    class=t110>
                                                                                    <tr>
                                                                                        <td class=t111>
                                                                                            <div style="font-size:0px;">
                                                                                                <a class=t133
                                                                                                    href=https://discord.gg/XGjJGadttz 
                                                                                                    target=_blank>
                                                                                                    <img
                                                                                                        class=t112
                                                                                                        style="display:block;border:0;Margin:0;"
                                                                                                        width=33
                                                                                                        height=27
                                                                                                        src="http://drive.google.com/uc?export=view&id=1pRd8W-syqerRAs3VMJt1wODpC36R-Yn-" /></a>
    
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                        <div class=t98
                                                                            style="display:inline-table;text-align:initial;vertical-align:inherit;width:20%;max-width:44px;">
                                                                            <div class=t99
                                                                                style="padding:0 10px 0 10px;">
                                                                                <table role=presentation width=100%
                                                                                    cellpadding=0 cellspacing=0
                                                                                    class=t100>
                                                                                    <tr>
                                                                                        <td class=t101>
                                                                                            <div style="font-size:0px;">
                                                                                                <a class=t133
                                                                                                    href=https://www.youtube.com/@GFMemories
                                                                                                    target=_blank>
                                                                                                    <img
                                                                                                        class=t102
                                                                                                        style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;"
                                                                                                        width=24
                                                                                                        height=24
                                                                                                        src=https://uploads.tabular.email/e/b158fd0c-1d9a-41bb-885b-099af24afa59/b6f1e7ce-8c7b-41ee-b453-746aaf5e9b57.png /></a>
    
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                        <div class=t88
                                                                            style="display:inline-table;text-align:initial;vertical-align:inherit;width:20%;max-width:44px;">
                                                                            <div class=t89
                                                                                style="padding:0 10px 0 10px;">
                                                                                <table role=presentation width=100%
                                                                                    cellpadding=0 cellspacing=0
                                                                                    class=t90>
                                                                                    <tr>
                                                                                        <td class=t91>
                                                                                            <div style="font-size:0px;">
                                                                                                <a class=t133
                                                                                                    href=https://www.twitch.tv/gfmemories
                                                                                                    target=_blank>
                                                                                                    <img class=t92
                                                                                                        style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;"
                                                                                                        width=24
                                                                                                        height=24
                                                                                                        src="http://drive.google.com/uc?export=view&id=16LTlqTySLWNCPfccVg-rKDJPxQb9LiaD" />
                                                                                                </a>
    
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                        <!--<div class=t78
                                                                            style="display:inline-table;text-align:initial;vertical-align:inherit;width:20%;max-width:44px;">
                                                                            <div class=t79
                                                                                style="padding:0 10px 0 10px;">
                                                                                <table role=presentation width=100%
                                                                                    cellpadding=0 cellspacing=0
                                                                                    class=t80>
                                                                                    <tr>
                                                                                        <td class=t81>
                                                                                            <div style="font-size:0px;">
                                                                                                <img class=t82
                                                                                                    style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;"
                                                                                                    width=24 height=24
                                                                                                    src=https://uploads.tabular.email/e/b158fd0c-1d9a-41bb-885b-099af24afa59/8e37593e-8033-4bc9-9fee-951849506678.png />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                        </div> -->
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table class=t125 role=presentation cellpadding=0 cellspacing=0
                                                            align=center>
                                                            <tr>
    
                                                                <td class=t126 style="width:600px;">
                                                                    <p class=t132
                                                                        style="margin-bottom:0;Margin-bottom:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;direction:ltr;color:#888888;text-align:center;mso-line-height-rule:exactly;mso-text-raise:3px;">
                                                                        &copy; ${date.getFullYear()} Acciona SA. All rights reserved.</p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table class=t115 role=presentation cellpadding=0 cellspacing=0
                                                            align=center>
                                                            <tr>
    
                                                                <td class=t116 style="width:600px;">
                                                                    <p class=t122
                                                                        style="margin-bottom:0;Margin-bottom:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;direction:ltr;color:#888888;text-align:center;mso-line-height-rule:exactly;mso-text-raise:3px;">
                                                                        <a class=t133
                                                                            href=https://www.youtube.com/@GFMemories
                                                                            style="margin-bottom:0;Margin-bottom:0;font-weight:700;font-style:normal;text-decoration:none;direction:ltr;color:#888888;mso-line-height-rule:exactly;"
                                                                            target=_blank>subscribe</a>  •  <a
                                                                            class=t134 href=#
                                                                            style="margin-bottom:0;Margin-bottom:0;font-weight:700;font-style:normal;text-decoration:none;direction:ltr;color:#888888;mso-line-height-rule:exactly;"
                                                                            target=_blank>Privacy policy</a>  •  <a
                                                                            class=t135 href=#
                                                                            style="margin-bottom:0;Margin-bottom:0;font-weight:700;font-style:normal;text-decoration:none;direction:ltr;color:#878787;mso-line-height-rule:exactly;"
                                                                            target=_blank>Contáctanos</a>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </div>
    </body>
    
    </html>`;
    return await emailStringCat;
        case 'gl':
            const emailStringGall = `<!DOCTYPE html
                PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
                    xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
                    <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
                    integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
                    crossorigin="anonymous" referrerpolicy="no-referrer" />
                    <meta name=x-apple-disable-message-reformatting>
                <meta http-equiv=X-UA-Compatible>
                <meta charset=utf-8>
                <meta name=viewport content=target-densitydpi=device-dpi>
                <meta content=true name=HandheldFriendly>
                <meta content=width=device-width name=viewport>
                <style type="text/css">
                table {
                    border-collapse: separate;
                    table-layout: fixed;
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt
                    }
    
                table td {
                    border-collapse: collapse
                }
    
                .ExternalClass {
                width: 100%
                }
    
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
            line-height: 100%
        }
    
        * {
            line-height: inherit;
            text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
            -moz-text-size-adjust: 100%;
            -o-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale
        }
    
        html {
            -webkit-text-size-adjust: none !important
        }
    
        img+div {
            display: none;
            display: none !important
        }
    
        img {
            Margin: 0;
            padding: 0;
            -ms-interpolation-mode: bicubic
        }
    
        h1,
        h2,
        h3,
        p,
        a {
            line-height: 1;
            overflow-wrap: normal;
            white-space: normal;
            word-break: break-word
        }
    
        a {
            text-decoration: none
        }
    
        h1,
        h2,
        h3,
        p {
            min-width: 100% !important;
            width: 100% !important;
            max-width: 100% !important;
            display: inline-block !important;
            border: 0;
            padding: 0;
            margin: 0
        }
    
        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important
        }
    
        a[href^="mailto"],
        a[href^="tel"],
        a[href^="sms"] {
            color: inherit;
            text-decoration: none
        }
    
        @media (min-width: 481px) {
            .hd {
                display: none !important
            }
        }
    
        @media (max-width: 480px) {
            .hm {
                display: none !important
            }
        }
    
        [style*="Albert Sans"] {
            font-family: 'Albert Sans', BlinkMacSystemFont, Segoe UI, Helvetica Neue, Arial, sans-serif !important;
        }
        @media only screen and (max-width:570px){
            .t155, .t145 {
                font-size: 14px;
            }
        }
        @media only screen and (min-width: 481px) {
            .t3 {
                mso-line-height-alt: 45px !important;
                line-height: 45px !important;
                display: block !important
            }
    
            .t9 {
                padding-left: 50px !important;
                padding-bottom: 60px !important;
                padding-right: 50px !important
            }
    
            .t11 {
                padding-left: 50px !important;
                padding-bottom: 60px !important;
                padding-right: 50px !important;
                width: 500px !important
            }
    
            .t15,
            .t23 {
                width: 250px !important
            }
    
            .t27,
            .t32 {
                padding-bottom: 25px !important
            }
    
            .t33 {
                line-height: 41px !important;
                font-size: 39px !important;
                letter-spacing: -1.56px !important
            }
    
            .t40 {
                padding: 48px 50px !important
            }
    
            .t42 {
                padding: 48px 50px !important;
                width: 500px !important
            }
    
            .t56,
            .t61 {
                padding-bottom: 44px !important
            }
    
            .t139,
            .t144 {
                padding-bottom: 45px !important
            }
    
            .t159 {
                padding-bottom: 60px !important;
                width: 130px !important
            }
    
            .t164 {
                padding-bottom: 60px !important
            }
        }
    </style>
    
    <link href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@500;700;800&display=swap" rel="stylesheet"
        type="text/css">
    </head>
    
    <body class=t0 style="min-width:100%;Margin:0px;padding:0px;background-color:#242424;">
    <div class=t1 style="background-color:#242424;">
        <table role=presentation width=100% cellpadding=0 cellspacing=0 border=0 align=center>
            <tr>
                <td class=t166 style="font-size:0;line-height:0;mso-line-height-rule:exactly;" valign=top align=center>
    
                    <table role=presentation width=100% cellpadding=0 cellspacing=0 border=0 align=center>
                        <tr>
                            <td>
                                <div class=t3 style="mso-line-height-rule:exactly;font-size:1px;display:none;">&nbsp;
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table class=t10 role=presentation cellpadding=0 cellspacing=0 align=center>
                                    <tr>
    
                                        <td class=t11
                                            style="background-color:#F8F8F8;overflow:hidden;width:540px;padding:0 30px 40px 30px;">
    
                                            <table role=presentation width=100%>
                                                <tr>
                                                    <td>
                                                        <table class=t158 role=presentation width="100%" align=center>
                                                            <tr>
    
                                                                <td style="width:100%;">
                                                                    <div style="font-size:0px;"><img class=t165
                                                                            style="display:block;border:0;Margin:0;"
                                                                            width="100%" height="100%"
                                                                            src="https://pluspng.com/img-png/logo-acciona-png-from-wikipedia-the-free-encyclopedia-1280.png" />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table class=t26 role=presentation cellpadding=0 cellspacing=0
                                                            align=center>
                                                            <tr>
                                                                <td class=t27 style="width:600px;padding:0 0 20px 0;">
                                                                    <span class=t33
                                                                        style="margin-bottom:0;Margin-bottom:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:28px;font-weight:800;font-style:normal;font-size:26px;text-decoration:none;text-transform:none;letter-spacing:-1.04px;direction:ltr;color:#191919;text-align:center;mso-line-height-rule:exactly;mso-text-raise:1px;">
                                                                        <p>
                                                                       <h4>Bienvenidos a Huella CO2</h4>
                                                                       </p>
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table class=t148 role=presentation cellpadding=0 cellspacing=0
                                                            align=center>
                                                            <tr>
                                                                <td class=t149 style="width:600px;padding:0 0 22px 0;">
                                                                    <p class=t155
                                                                        style="margin-bottom:0;Margin-bottom:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:20px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
                                                                        Enhorabuena <b>${account_name}</b> cuenta creada exitosamente.</p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table class=t138 role=presentation cellpadding=0 cellspacing=0
                                                            align=center>
                                                            <tr>
                                                                <td class=t139 style="width:600px;padding:0 0 34px 0;">
                                                                    <p class=t145
                                                                        style="margin-bottom:0;Margin-bottom:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:20px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
                                                                        Gracias por confiar Acciona - Huella CO2, te aseguramos que tendras una experiencia sin igual. </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <!--  <td>
                                                        <table class=t14 role=presentation cellpadding=0 cellspacing=0
                                                            align=left>
                                                            <tr>
                                                                <td class=t15
                                                                    style="background-color:#181818;overflow:hidden;width:353px;text-align:center;line-height:44px;mso-line-height-rule:exactly;mso-text-raise:10px;border-radius:44px 44px 44px 44px;">
                                                                     <span class=t21
                                                                        style="display:block;margin-bottom:0;Margin-bottom:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:44px;font-weight:800;font-style:normal;font-size:12px;text-decoration:none;text-transform:uppercase;letter-spacing:2.4px;direction:ltr;color:#F8F8F8;text-align:center;mso-line-height-rule:exactly;mso-text-raise:10px;"
                                                                        target=_blank>SEND US A MESSAGE</span>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>-->
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table class=t41 role=presentation cellpadding=0 cellspacing=0 align=center>
                                    <tr>
                                        <td class=t42 style="overflow:hidden;width:540px;padding:40px 30px 40px 30px;">
                                            <table role=presentation width=100% cellpadding=0 cellspacing=0>
                                                <tr>
                                                    <td>
                                                        <table class=t45 role=presentation cellpadding=0 cellspacing=0
                                                            align=center>
                                                            <tr>
    
                                                                <td class=t46 style="width:600px;">
                                                                    <p class=t52
                                                                        style="margin-bottom:0;Margin-bottom:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:800;font-style:normal;font-size:18px;text-decoration:none;text-transform:none;letter-spacing:-0.9px;direction:ltr;color:#757575;text-align:center;mso-line-height-rule:exactly;mso-text-raise:1px;">
                                                                        ¿Quiere actualizaciones a través de más
                                                                        plataformas?</p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table class=t55 role=presentation cellpadding=0 cellspacing=0
                                                            align=center>
                                                            <tr>
    
                                                                <td class=t56
                                                                    style="overflow:hidden;width:800px;padding:10px 0 36px 0;">
                                                                    <div class=t62
                                                                        style="display:inline-table;width:100%;text-align:center;vertical-align:top;">
                                                                        <!--<div class=t68
                                                                            style="display:inline-table;text-align:initial;vertical-align:inherit;width:20%;max-width:44px;">
                                                                            <div class=t69
                                                                                style="padding:0 10px 0 10px;">
                                                                                <table role=presentation width=100%
                                                                                    cellpadding=0 cellspacing=0
                                                                                    class=t70>
                                                                                    <tr>
                                                                                        <td class=t71>
                                                                                            <div style="font-size:0px;">
                                                                                                <img class=t72
                                                                                                    style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;"
                                                                                                    width=24 height=24
                                                                                                    src=https://uploads.tabular.email/e/2feb9749-6369-44a9-90e9-1c26bf36c1a5/90e14628-2d8f-4c64-af7a-410b0a53d60c.png />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                        </div> -->
                                                                        <div class=t108
                                                                            style="display:inline-table;text-align:initial;vertical-align:inherit;width:50px;">
                                                                            <div class=t109
                                                                                style="padding:0 10px 0 10px;">
                                                                                <table role=presentation width=100%
                                                                                    cellpadding=0 cellspacing=0
                                                                                    class=t110>
                                                                                    <tr>
                                                                                        <td class=t111>
                                                                                            <div style="font-size:0px;">
                                                                                                <a class=t133
                                                                                                    href=https://discord.gg/XGjJGadttz 
                                                                                                    target=_blank>
                                                                                                    <img
                                                                                                        class=t112
                                                                                                        style="display:block;border:0;Margin:0;"
                                                                                                        width=33
                                                                                                        height=27
                                                                                                        src="http://drive.google.com/uc?export=view&id=1pRd8W-syqerRAs3VMJt1wODpC36R-Yn-" /></a>
    
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                        <div class=t98
                                                                            style="display:inline-table;text-align:initial;vertical-align:inherit;width:20%;max-width:44px;">
                                                                            <div class=t99
                                                                                style="padding:0 10px 0 10px;">
                                                                                <table role=presentation width=100%
                                                                                    cellpadding=0 cellspacing=0
                                                                                    class=t100>
                                                                                    <tr>
                                                                                        <td class=t101>
                                                                                            <div style="font-size:0px;">
                                                                                                <a class=t133
                                                                                                    href=https://www.youtube.com/@GFMemories
                                                                                                    target=_blank>
                                                                                                    <img
                                                                                                        class=t102
                                                                                                        style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;"
                                                                                                        width=24
                                                                                                        height=24
                                                                                                        src=https://uploads.tabular.email/e/b158fd0c-1d9a-41bb-885b-099af24afa59/b6f1e7ce-8c7b-41ee-b453-746aaf5e9b57.png /></a>
    
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                        <div class=t88
                                                                            style="display:inline-table;text-align:initial;vertical-align:inherit;width:20%;max-width:44px;">
                                                                            <div class=t89
                                                                                style="padding:0 10px 0 10px;">
                                                                                <table role=presentation width=100%
                                                                                    cellpadding=0 cellspacing=0
                                                                                    class=t90>
                                                                                    <tr>
                                                                                        <td class=t91>
                                                                                            <div style="font-size:0px;">
                                                                                                <a class=t133
                                                                                                    href=https://www.twitch.tv/gfmemories
                                                                                                    target=_blank>
                                                                                                    <img class=t92
                                                                                                        style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;"
                                                                                                        width=24
                                                                                                        height=24
                                                                                                        src="http://drive.google.com/uc?export=view&id=16LTlqTySLWNCPfccVg-rKDJPxQb9LiaD" />
                                                                                                </a>
    
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                        <!--<div class=t78
                                                                            style="display:inline-table;text-align:initial;vertical-align:inherit;width:20%;max-width:44px;">
                                                                            <div class=t79
                                                                                style="padding:0 10px 0 10px;">
                                                                                <table role=presentation width=100%
                                                                                    cellpadding=0 cellspacing=0
                                                                                    class=t80>
                                                                                    <tr>
                                                                                        <td class=t81>
                                                                                            <div style="font-size:0px;">
                                                                                                <img class=t82
                                                                                                    style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;"
                                                                                                    width=24 height=24
                                                                                                    src=https://uploads.tabular.email/e/b158fd0c-1d9a-41bb-885b-099af24afa59/8e37593e-8033-4bc9-9fee-951849506678.png />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                        </div> -->
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table class=t125 role=presentation cellpadding=0 cellspacing=0
                                                            align=center>
                                                            <tr>
    
                                                                <td class=t126 style="width:600px;">
                                                                    <p class=t132
                                                                        style="margin-bottom:0;Margin-bottom:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;direction:ltr;color:#888888;text-align:center;mso-line-height-rule:exactly;mso-text-raise:3px;">
                                                                        &copy; ${date.getFullYear()} Acciona SA. All rights reserved.</p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table class=t115 role=presentation cellpadding=0 cellspacing=0
                                                            align=center>
                                                            <tr>
    
                                                                <td class=t116 style="width:600px;">
                                                                    <p class=t122
                                                                        style="margin-bottom:0;Margin-bottom:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;direction:ltr;color:#888888;text-align:center;mso-line-height-rule:exactly;mso-text-raise:3px;">
                                                                        <a class=t133
                                                                            href=https://www.youtube.com/@GFMemories
                                                                            style="margin-bottom:0;Margin-bottom:0;font-weight:700;font-style:normal;text-decoration:none;direction:ltr;color:#888888;mso-line-height-rule:exactly;"
                                                                            target=_blank>subscribe</a>  •  <a
                                                                            class=t134 href=#
                                                                            style="margin-bottom:0;Margin-bottom:0;font-weight:700;font-style:normal;text-decoration:none;direction:ltr;color:#888888;mso-line-height-rule:exactly;"
                                                                            target=_blank>Privacy policy</a>  •  <a
                                                                            class=t135 href=#
                                                                            style="margin-bottom:0;Margin-bottom:0;font-weight:700;font-style:normal;text-decoration:none;direction:ltr;color:#878787;mso-line-height-rule:exactly;"
                                                                            target=_blank>Contáctanos</a>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </div>
    </body>
    
    </html>`;
    return await emailStringGall;
        case 'eu':
            const emailStringEsk = `<!DOCTYPE html
                PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
                    xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
                    <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
                    integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
                    crossorigin="anonymous" referrerpolicy="no-referrer" />
                    <meta name=x-apple-disable-message-reformatting>
                <meta http-equiv=X-UA-Compatible>
                <meta charset=utf-8>
                <meta name=viewport content=target-densitydpi=device-dpi>
                <meta content=true name=HandheldFriendly>
                <meta content=width=device-width name=viewport>
                <style type="text/css">
                table {
                    border-collapse: separate;
                    table-layout: fixed;
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt
                    }
    
                table td {
                    border-collapse: collapse
                }
    
                .ExternalClass {
                width: 100%
                }
    
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
            line-height: 100%
        }
    
        * {
            line-height: inherit;
            text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
            -moz-text-size-adjust: 100%;
            -o-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale
        }
    
        html {
            -webkit-text-size-adjust: none !important
        }
    
        img+div {
            display: none;
            display: none !important
        }
    
        img {
            Margin: 0;
            padding: 0;
            -ms-interpolation-mode: bicubic
        }
    
        h1,
        h2,
        h3,
        p,
        a {
            line-height: 1;
            overflow-wrap: normal;
            white-space: normal;
            word-break: break-word
        }
    
        a {
            text-decoration: none
        }
    
        h1,
        h2,
        h3,
        p {
            min-width: 100% !important;
            width: 100% !important;
            max-width: 100% !important;
            display: inline-block !important;
            border: 0;
            padding: 0;
            margin: 0
        }
    
        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important
        }
    
        a[href^="mailto"],
        a[href^="tel"],
        a[href^="sms"] {
            color: inherit;
            text-decoration: none
        }
    
        @media (min-width: 481px) {
            .hd {
                display: none !important
            }
        }
    
        @media (max-width: 480px) {
            .hm {
                display: none !important
            }
        }
    
        [style*="Albert Sans"] {
            font-family: 'Albert Sans', BlinkMacSystemFont, Segoe UI, Helvetica Neue, Arial, sans-serif !important;
        }
        @media only screen and (max-width:570px){
            .t155, .t145 {
                font-size: 14px;
            }
        }
        @media only screen and (min-width: 481px) {
            .t3 {
                mso-line-height-alt: 45px !important;
                line-height: 45px !important;
                display: block !important
            }
    
            .t9 {
                padding-left: 50px !important;
                padding-bottom: 60px !important;
                padding-right: 50px !important
            }
    
            .t11 {
                padding-left: 50px !important;
                padding-bottom: 60px !important;
                padding-right: 50px !important;
                width: 500px !important
            }
    
            .t15,
            .t23 {
                width: 250px !important
            }
    
            .t27,
            .t32 {
                padding-bottom: 25px !important
            }
    
            .t33 {
                line-height: 41px !important;
                font-size: 39px !important;
                letter-spacing: -1.56px !important
            }
    
            .t40 {
                padding: 48px 50px !important
            }
    
            .t42 {
                padding: 48px 50px !important;
                width: 500px !important
            }
    
            .t56,
            .t61 {
                padding-bottom: 44px !important
            }
    
            .t139,
            .t144 {
                padding-bottom: 45px !important
            }
    
            .t159 {
                padding-bottom: 60px !important;
                width: 130px !important
            }
    
            .t164 {
                padding-bottom: 60px !important
            }
        }
    </style>
    
    <link href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@500;700;800&display=swap" rel="stylesheet"
        type="text/css">
    </head>
    
    <body class=t0 style="min-width:100%;Margin:0px;padding:0px;background-color:#242424;">
    <div class=t1 style="background-color:#242424;">
        <table role=presentation width=100% cellpadding=0 cellspacing=0 border=0 align=center>
            <tr>
                <td class=t166 style="font-size:0;line-height:0;mso-line-height-rule:exactly;" valign=top align=center>
    
                    <table role=presentation width=100% cellpadding=0 cellspacing=0 border=0 align=center>
                        <tr>
                            <td>
                                <div class=t3 style="mso-line-height-rule:exactly;font-size:1px;display:none;">&nbsp;
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table class=t10 role=presentation cellpadding=0 cellspacing=0 align=center>
                                    <tr>
    
                                        <td class=t11
                                            style="background-color:#F8F8F8;overflow:hidden;width:540px;padding:0 30px 40px 30px;">
    
                                            <table role=presentation width=100%>
                                                <tr>
                                                    <td>
                                                        <table class=t158 role=presentation width="100%" align=center>
                                                            <tr>
    
                                                                <td style="width:100%;">
                                                                    <div style="font-size:0px;"><img class=t165
                                                                            style="display:block;border:0;Margin:0;"
                                                                            width="100%" height="100%"
                                                                            src="https://pluspng.com/img-png/logo-acciona-png-from-wikipedia-the-free-encyclopedia-1280.png" />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table class=t26 role=presentation cellpadding=0 cellspacing=0
                                                            align=center>
                                                            <tr>
                                                                <td class=t27 style="width:600px;padding:0 0 20px 0;">
                                                                    <span class=t33
                                                                        style="margin-bottom:0;Margin-bottom:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:28px;font-weight:800;font-style:normal;font-size:26px;text-decoration:none;text-transform:none;letter-spacing:-1.04px;direction:ltr;color:#191919;text-align:center;mso-line-height-rule:exactly;mso-text-raise:1px;">
                                                                        <p>
                                                                       <h4>Bienvenidos a Huella CO2</h4>
                                                                       </p>
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table class=t148 role=presentation cellpadding=0 cellspacing=0
                                                            align=center>
                                                            <tr>
                                                                <td class=t149 style="width:600px;padding:0 0 22px 0;">
                                                                    <p class=t155
                                                                        style="margin-bottom:0;Margin-bottom:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:20px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
                                                                        Enhorabuena <b>${account_name}</b> cuenta creada exitosamente.</p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table class=t138 role=presentation cellpadding=0 cellspacing=0
                                                            align=center>
                                                            <tr>
                                                                <td class=t139 style="width:600px;padding:0 0 34px 0;">
                                                                    <p class=t145
                                                                        style="margin-bottom:0;Margin-bottom:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:20px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
                                                                        Gracias por confiar Acciona - Huella CO2, te aseguramos que tendras una experiencia sin igual. </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <!--  <td>
                                                        <table class=t14 role=presentation cellpadding=0 cellspacing=0
                                                            align=left>
                                                            <tr>
                                                                <td class=t15
                                                                    style="background-color:#181818;overflow:hidden;width:353px;text-align:center;line-height:44px;mso-line-height-rule:exactly;mso-text-raise:10px;border-radius:44px 44px 44px 44px;">
                                                                     <span class=t21
                                                                        style="display:block;margin-bottom:0;Margin-bottom:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:44px;font-weight:800;font-style:normal;font-size:12px;text-decoration:none;text-transform:uppercase;letter-spacing:2.4px;direction:ltr;color:#F8F8F8;text-align:center;mso-line-height-rule:exactly;mso-text-raise:10px;"
                                                                        target=_blank>SEND US A MESSAGE</span>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>-->
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table class=t41 role=presentation cellpadding=0 cellspacing=0 align=center>
                                    <tr>
                                        <td class=t42 style="overflow:hidden;width:540px;padding:40px 30px 40px 30px;">
                                            <table role=presentation width=100% cellpadding=0 cellspacing=0>
                                                <tr>
                                                    <td>
                                                        <table class=t45 role=presentation cellpadding=0 cellspacing=0
                                                            align=center>
                                                            <tr>
    
                                                                <td class=t46 style="width:600px;">
                                                                    <p class=t52
                                                                        style="margin-bottom:0;Margin-bottom:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:800;font-style:normal;font-size:18px;text-decoration:none;text-transform:none;letter-spacing:-0.9px;direction:ltr;color:#757575;text-align:center;mso-line-height-rule:exactly;mso-text-raise:1px;">
                                                                        ¿Quiere actualizaciones a través de más
                                                                        plataformas?</p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table class=t55 role=presentation cellpadding=0 cellspacing=0
                                                            align=center>
                                                            <tr>
    
                                                                <td class=t56
                                                                    style="overflow:hidden;width:800px;padding:10px 0 36px 0;">
                                                                    <div class=t62
                                                                        style="display:inline-table;width:100%;text-align:center;vertical-align:top;">
                                                                        <!--<div class=t68
                                                                            style="display:inline-table;text-align:initial;vertical-align:inherit;width:20%;max-width:44px;">
                                                                            <div class=t69
                                                                                style="padding:0 10px 0 10px;">
                                                                                <table role=presentation width=100%
                                                                                    cellpadding=0 cellspacing=0
                                                                                    class=t70>
                                                                                    <tr>
                                                                                        <td class=t71>
                                                                                            <div style="font-size:0px;">
                                                                                                <img class=t72
                                                                                                    style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;"
                                                                                                    width=24 height=24
                                                                                                    src=https://uploads.tabular.email/e/2feb9749-6369-44a9-90e9-1c26bf36c1a5/90e14628-2d8f-4c64-af7a-410b0a53d60c.png />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                        </div> -->
                                                                        <div class=t108
                                                                            style="display:inline-table;text-align:initial;vertical-align:inherit;width:50px;">
                                                                            <div class=t109
                                                                                style="padding:0 10px 0 10px;">
                                                                                <table role=presentation width=100%
                                                                                    cellpadding=0 cellspacing=0
                                                                                    class=t110>
                                                                                    <tr>
                                                                                        <td class=t111>
                                                                                            <div style="font-size:0px;">
                                                                                                <a class=t133
                                                                                                    href=https://discord.gg/XGjJGadttz 
                                                                                                    target=_blank>
                                                                                                    <img
                                                                                                        class=t112
                                                                                                        style="display:block;border:0;Margin:0;"
                                                                                                        width=33
                                                                                                        height=27
                                                                                                        src="http://drive.google.com/uc?export=view&id=1pRd8W-syqerRAs3VMJt1wODpC36R-Yn-" /></a>
    
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                        <div class=t98
                                                                            style="display:inline-table;text-align:initial;vertical-align:inherit;width:20%;max-width:44px;">
                                                                            <div class=t99
                                                                                style="padding:0 10px 0 10px;">
                                                                                <table role=presentation width=100%
                                                                                    cellpadding=0 cellspacing=0
                                                                                    class=t100>
                                                                                    <tr>
                                                                                        <td class=t101>
                                                                                            <div style="font-size:0px;">
                                                                                                <a class=t133
                                                                                                    href=https://www.youtube.com/@GFMemories
                                                                                                    target=_blank>
                                                                                                    <img
                                                                                                        class=t102
                                                                                                        style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;"
                                                                                                        width=24
                                                                                                        height=24
                                                                                                        src=https://uploads.tabular.email/e/b158fd0c-1d9a-41bb-885b-099af24afa59/b6f1e7ce-8c7b-41ee-b453-746aaf5e9b57.png /></a>
    
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                        <div class=t88
                                                                            style="display:inline-table;text-align:initial;vertical-align:inherit;width:20%;max-width:44px;">
                                                                            <div class=t89
                                                                                style="padding:0 10px 0 10px;">
                                                                                <table role=presentation width=100%
                                                                                    cellpadding=0 cellspacing=0
                                                                                    class=t90>
                                                                                    <tr>
                                                                                        <td class=t91>
                                                                                            <div style="font-size:0px;">
                                                                                                <a class=t133
                                                                                                    href=https://www.twitch.tv/gfmemories
                                                                                                    target=_blank>
                                                                                                    <img class=t92
                                                                                                        style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;"
                                                                                                        width=24
                                                                                                        height=24
                                                                                                        src="http://drive.google.com/uc?export=view&id=16LTlqTySLWNCPfccVg-rKDJPxQb9LiaD" />
                                                                                                </a>
    
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                        <!--<div class=t78
                                                                            style="display:inline-table;text-align:initial;vertical-align:inherit;width:20%;max-width:44px;">
                                                                            <div class=t79
                                                                                style="padding:0 10px 0 10px;">
                                                                                <table role=presentation width=100%
                                                                                    cellpadding=0 cellspacing=0
                                                                                    class=t80>
                                                                                    <tr>
                                                                                        <td class=t81>
                                                                                            <div style="font-size:0px;">
                                                                                                <img class=t82
                                                                                                    style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;"
                                                                                                    width=24 height=24
                                                                                                    src=https://uploads.tabular.email/e/b158fd0c-1d9a-41bb-885b-099af24afa59/8e37593e-8033-4bc9-9fee-951849506678.png />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                        </div> -->
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table class=t125 role=presentation cellpadding=0 cellspacing=0
                                                            align=center>
                                                            <tr>
    
                                                                <td class=t126 style="width:600px;">
                                                                    <p class=t132
                                                                        style="margin-bottom:0;Margin-bottom:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;direction:ltr;color:#888888;text-align:center;mso-line-height-rule:exactly;mso-text-raise:3px;">
                                                                        &copy; ${date.getFullYear()} Acciona SA. All rights reserved.</p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table class=t115 role=presentation cellpadding=0 cellspacing=0
                                                            align=center>
                                                            <tr>
    
                                                                <td class=t116 style="width:600px;">
                                                                    <p class=t122
                                                                        style="margin-bottom:0;Margin-bottom:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;direction:ltr;color:#888888;text-align:center;mso-line-height-rule:exactly;mso-text-raise:3px;">
                                                                        <a class=t133
                                                                            href=https://www.youtube.com/@GFMemories
                                                                            style="margin-bottom:0;Margin-bottom:0;font-weight:700;font-style:normal;text-decoration:none;direction:ltr;color:#888888;mso-line-height-rule:exactly;"
                                                                            target=_blank>subscribe</a>  •  <a
                                                                            class=t134 href=#
                                                                            style="margin-bottom:0;Margin-bottom:0;font-weight:700;font-style:normal;text-decoration:none;direction:ltr;color:#888888;mso-line-height-rule:exactly;"
                                                                            target=_blank>Privacy policy</a>  •  <a
                                                                            class=t135 href=#
                                                                            style="margin-bottom:0;Margin-bottom:0;font-weight:700;font-style:normal;text-decoration:none;direction:ltr;color:#878787;mso-line-height-rule:exactly;"
                                                                            target=_blank>Contáctanos</a>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </div>
    </body>
    
    </html>`;
    return await emailStringEsk;
        default:
            break; 
    }
  }
  export default sendEmailWelcome;
  