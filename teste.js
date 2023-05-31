// Invocamos o leitor de qr code
const qrcode = require('qrcode-terminal');
const { Client, Buttons, List, MessageMedia, LocalAuth } = require('whatsapp-web.js');
const client = new Client({puppeteer: {executablePath: 'C:/Users/PC/AppData/Local/Google/Chrome/Application/chrome.exe',}});

 

// entao habilitamos o usuario a acessar o serviço de leitura do qr code
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

// apos isso ele diz que foi tudo certin
client.on('ready', () => {
    console.log('Tudo certo! WhatsApp conectado.');
});

// E inicializa tudo para fazer a nossa magica =)
client.initialize();

const delay = ms => new Promise(res => setTimeout(res, ms));

// Novo Funil Base Projeto
// Reactions 
// Lista de usuários que já receberam as mensagens do funil

const usersInFunnel = [];

client.on('message', async msg => {
  if (!msg.from.endsWith('@c.us')) {
    return; // Verifica se o número de celular é válido
  }

  // Verifica se o número de celular já está na lista de usuários no funil
  if (usersInFunnel.includes(msg.from)) {
    return;
  }

  const chat = await msg.getChat();
  await chat.sendStateTyping();
  await delay(3000);


 

  await chat.sendStateTyping(); // Simulando Digitação
  await delay(3000); //delay de 3 segundos
  await client.sendMessage(msg.from, 'Olá! Seja bem vindo!');

  await chat.sendStateTyping(); // Simulando Digitação
  await delay(3000); //delay de 3 segundos
  await client.sendMessage(msg.from, 'Vamos iniciar o atendimento digital:\n\nDigite apenas o numero da opção abaixo):\n\n\n[11] Cristal 20L - R$ 12.00\n[12]  Cristal 10L - R$ 11.00\n[13] Viva Leve 20L - R$ 18.00\n[14] Viva Leve 10L - R$ 15.00\n[15] Serra negra 20L (em breve)\n[16] Serra Negra 10L (em breve)');




  usersInFunnel.push(msg.from); // Adicionando o usuário à lista de usuários no funil


});

client.on('message', async msg => {

    if ((msg.body === '11') && msg.from.endsWith('@c.us')) {
        
        chat = await msg.getChat();
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000); //delay de 3 segundos
        await client.sendMessage(msg.from, 'Digite a quantidade de galões: ');

        chat = await msg.getChat();
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000); //delay de 3 segundos
        await client.sendMessage(msg.from, 'Ano dos galões: ');

        chat = await msg.getChat();
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000); //delay de 3 segundos
        await client.sendMessage(msg.from, 'Qual o Endereço?  ');

        chat = await msg.getChat();
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000); //delay de 3 segundos
        await client.sendMessage(msg.from, 'Forma de pagamento:  ');

        chat = await msg.getChat();
        client.sendMessage(msg.from, '\n17. Dinheiro\n18. Cartão\n19. Pix');
        if ((msg.body === '17') && msg.from.endsWith('@c.us')) {
          await client.sendMessage(msg.from, 'Vai precisar de troco? ');
          client.sendMessage(msg.from, '\n20. Sim\n21. Não\n');
          chat = await msg.getChat();
        }

        if ((msg.body === '20') && msg.from.endsWith('@c.us')) {
          await client.sendMessage(msg.from, 'Pra quanto? ');
          chat = await msg.getChat();
        }

    
        if ((msg.body === '18') && msg.from.endsWith('@c.us')) {            
          await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
       
        }
    
        if ((msg.body === '19') && msg.from.endsWith('@c.us')) {
          const chat = await msg.getChat();
          client.sendMessage(msg.from, '\nChave Celular: 19992098873\nAndrea S Oliveira\nPor favor, enviar o comprovante para seu pedido ser liberado!');
        }
        
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await client.sendMessage(msg.from, 'Tempo para entrega é de 30 a 40 minutos, podendo ser entregue antes.\n\nObrigada pela preferência!!');
    
       
      
       
    }

      

    if ((msg.body === '12') && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000); //delay de 3 segundos
        await client.sendMessage(msg.from, 'texto editavel');
        
    }

    if ((msg.body === '13') && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000); //delay de 3 segundos
        await client.sendMessage(msg.from, 'texto editavel');
        
    }

    if ((msg.body === '14') && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000); //delay de 3 segundos
        await client.sendMessage(msg.from, 'texto editavel');
        
    }

    if ((msg.body === '15') && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000); //delay de 3 segundos
        await client.sendMessage(msg.from, 'texto editavel');
        
    }
    if ((msg.body === '16') && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000); //delay de 3 segundos
        await client.sendMessage(msg.from, 'texto editavel');
        
    }



  

});