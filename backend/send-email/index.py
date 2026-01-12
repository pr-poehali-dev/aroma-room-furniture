import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def handler(event: dict, context) -> dict:
    '''API для отправки заявок с сайта на email'''
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }

    try:
        body = json.loads(event.get('body', '{}'))
        name = body.get('name', '')
        phone = body.get('phone', '')
        message = body.get('message', '')

        if not name or not phone:
            return {
                'statusCode': 400,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Имя и телефон обязательны'})
            }

        sender_email = 'alexeycrypto@yandex.ru'
        receiver_email = 'alexeychal@gmail.com'
        password = os.environ.get('YANDEX_SMTP_PASSWORD')

        msg = MIMEMultipart('alternative')
        msg['Subject'] = f'Новая заявка с сайта AromaRoom от {name}'
        msg['From'] = sender_email
        msg['To'] = receiver_email

        html_content = f"""
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 10px;">
              <h2 style="color: #8B4513; border-bottom: 2px solid #8B4513; padding-bottom: 10px;">
                Новая заявка с сайта
              </h2>
              
              <div style="background-color: white; padding: 20px; border-radius: 8px; margin-top: 20px;">
                <p style="margin: 10px 0;">
                  <strong style="color: #8B4513;">Имя:</strong> {name}
                </p>
                <p style="margin: 10px 0;">
                  <strong style="color: #8B4513;">Телефон:</strong> 
                  <a href="tel:{phone}" style="color: #0066cc; text-decoration: none;">{phone}</a>
                </p>
                <p style="margin: 10px 0;">
                  <strong style="color: #8B4513;">Сообщение:</strong>
                </p>
                <div style="background-color: #f5f5f5; padding: 15px; border-left: 3px solid #8B4513; margin-top: 10px;">
                  {message if message else '<em style="color: #999;">Сообщение не указано</em>'}
                </div>
              </div>
              
              <p style="margin-top: 20px; color: #666; font-size: 12px; text-align: center;">
                Это письмо отправлено автоматически с сайта AromaRoom
              </p>
            </div>
          </body>
        </html>
        """

        part = MIMEText(html_content, 'html', 'utf-8')
        msg.attach(part)

        with smtplib.SMTP_SSL('smtp.yandex.ru', 465) as server:
            server.login(sender_email, password)
            server.send_message(msg)

        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': True,
                'message': 'Заявка успешно отправлена'
            })
        }

    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'error': 'Ошибка отправки',
                'details': str(e)
            })
        }
