import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './project/project.module';
import { QuestionModule } from './question/question.module';
import { UserModule } from './user/user.module';
import { PaymentModule } from './payment/payment.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './project/entities/project.entity';
import { User } from './user/entities/user.entity';
import { FootprintHistoryModule } from './footprint-history/footprint-history.module';
import { TextDataViewConfigModule } from './text-data-view-config/text-data-view-config.module';
import { AnswerTypesModule } from './answer-types/answer-types.module';
import { AnswerType } from './answer-types/entities/answer-type.entity';
import { Payment } from './payment/entities/payment.entity';
import { Question } from './question/entities/question.entity';
import { FootprintHistory } from './footprint-history/entities/footprint-history.entity';
import { TextDataViewConfig } from './text-data-view-config/entities/text-data-view-config.entity';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { FootprintCategoryModule } from './footprint-category/footprint-category.module';
import { ProjectCategoryModule } from './project-category/project-category.module';
import { RecommendationModule } from './recommendation/recommendation.module';
import { FrequentlyAskedQuestionModule } from './frequently-asked-question/frequently-asked-question.module';
import { RecoveryCodePasswordModule } from './recovery-code-password/recovery-code-password.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { RedsysService } from './redsys/redsys.service';
import { RedsysModule } from './redsys/redsys.module';
import { CountriesModule } from './countries/countries.module';
import { GlobalConfigModule } from './global-config/global-config.module';
import { Country } from './countries/entities/country.entity';
import { GlobalConfig } from './global-config/entities/global-config.entity';
import { RecoveryCodePassword } from './recovery-code-password/entities/recovery-code-password.entity';
import { Recommendation } from './recommendation/entities/recommendation.entity';
import { FrequentlyAskedQuestion } from './frequently-asked-question/entities/frequently-asked-question.entity';
import { FootprintCategory } from './footprint-category/entities/footprint-category.entity';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
    }),
    ProjectModule,
    QuestionModule,
    UserModule,
    PaymentModule,
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'mongodb',
      url: process.env.DB_USERNAME ? `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/Acciona_co2_db?retryWrites=false`:`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/Acciona_co2_db?retryWrites=false`,
      useNewUrlParser:true,
      useUnifiedTopology: true,
      autoLoadEntities: true,
      synchronize:true,
      entities: [
        Project,
        User,
        Question,
        Payment,
        AnswerType,
        FootprintHistory,
        TextDataViewConfig,
        Country,
        GlobalConfig,
        RecoveryCodePassword,
        Recommendation,
        FrequentlyAskedQuestion,
        FootprintCategory
      ],
    }),
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        //secure: false,
        auth: {
          user: 'infogfmemories@gmail.com',
          pass: 'bsls kuob rtiv pstl',
        },
      },
    }),
    /*MailerModule.forRoot({
      transport: {
        host: `email-smtp.${process.env.AWS_DEFAULT_REGION}.amazonaws.com`,
        //secure: false,
        auth: {
          user: process.env.AWS_ACCESS_KEY_ID,
          pass: process.env.AWS_SECRET_ACCESS_KEY,
        },
      },
    }),
    */
    FootprintHistoryModule,
    TextDataViewConfigModule,
    AnswerTypesModule,
    AuthModule,
    FootprintCategoryModule,
    ProjectCategoryModule,
    RecommendationModule,
    FrequentlyAskedQuestionModule,
    RecoveryCodePasswordModule,
    RedsysModule,
    CountriesModule,
    GlobalConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
