import { NestFactory } from '@nestjs/core'
import { DocumentBuilder } from '@nestjs/swagger'
import { SwaggerModule } from '@nestjs/swagger/dist'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	app.enableCors()

  app.useGlobalPipes(new ValidationPipe())

	const config = new DocumentBuilder()
		.setTitle('Lesson api')
		.setDescription('This api for lesson')
		.setVersion('1.0')
		.addTag('API')
		.build()

	const document = SwaggerModule.createDocument(app, config)

	SwaggerModule.setup('api', app, document)

	await app.listen(3000)
}
bootstrap()
