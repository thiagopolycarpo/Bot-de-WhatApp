// Invocamos o leitor de qr code
const qrcode = require('qrcode-terminal');
const { Client, Buttons, List, MessageMedia, LocalAuth } = require('whatsapp-web.js');
const client = new Client({
    authStrategy: new LocalAuth()
});

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
  await chat.sendStateTyping(); // Simulando Digitação
  await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
  await msg.reply('Olá! Seja bem vindo!\n\n Vamos iniciar o atendimento digital: '); //Primeira mensagem de texto
  await delay(1000); //delay de 1 segundo
  await client.sendMessage(msg.from, 'Escolha entre as opções abaixo (responda apenas o numero da opção):');
  await delay(3000); //delay de 3 segundos
 
  usersInFunnel.push(msg.from); // Adicionando o usuário à lista de usuários no funil
  
  client.sendMessage(msg.from, 'Escolha o produto desejado:\n\n1. Cristal 20L - R$ 12.00\n2. Cristal 10L - R$ 11.00\n 3. Viva Leve 20L - R$ 18.00\n 4. Viva Leve 10L - R$ 15.00\n5. Serra negra 20L (em breve)\n6. Serra Negra 10L (em breve)');
  chat = await msg.getChat();




if (msg.body !== null && msg.body === '1'|| msg.body === 'Produtos' && msg.from.endsWith('@c.us')) {
    const chat = await msg.getChat();

    await delay(1000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
    client.sendMessage(msg.from, 'Quantidade de galões:');
    chat = await msg.getChat();
    
    await chat.sendStateTyping(); // Simulando Digitação
    await delay(1000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
    
    await client.sendMessage(msg.from, 'Ano dos galões: ');
    chat = await msg.getChat();
    
    await chat.sendStateTyping(); // Simulando Digitação
    await delay(1000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
    
    await client.sendMessage(msg.from, 'Qual o Endereço? ');
    chat = await msg.getChat();

    await client.sendMessage(msg.from, 'Forma de pagamento: ');
    client.sendMessage(msg.from, '\n1. Dinheiro\n2. Cartão\n3. Pix');

    if (msg.body !== null && msg.body === '1'|| msg.body === 'Produtos' && msg.from.endsWith('@c.us')) {
      await client.sendMessage(msg.from, 'Vai precisar de troco? ');
      client.sendMessage(msg.from, '\n1. Sim\n2. Não\n');
      chat = await msg.getChat();
    }

    if (msg.body !== null && msg.body === '2'|| msg.body === 'Produtos' && msg.from.endsWith('@c.us')) {
      await delay(1000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
   
    }

    if (msg.body !== null && msg.body === '3'|| msg.body === 'Produtos' && msg.from.endsWith('@c.us')) {
      client.sendMessage(msg.from, '\nChave Celular: 19992098873\nAndrea S Oliveira\nPor favor, enviar o comprovante para seu pedido ser liberado!');
      chat = await msg.getChat();

    }

    
    await client.sendMessage(msg.from, 'Tempo para entrega é de 30 a 40 minutos, podendo ser entregue antes.\n\nObrigada pela preferência!!');

   

}

if (msg.body !== null && msg.body === '2'|| msg.body === 'Produtos' && msg.from.endsWith('@c.us')) {
  const chat = await msg.getChat();

  await delay(1000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
  client.sendMessage(msg.from, 'Quantidade de galões:');
  chat = await msg.getChat();
  
  await chat.sendStateTyping(); // Simulando Digitação
  await delay(1000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
  
  await client.sendMessage(msg.from, 'Ano dos galões: ');
  chat = await msg.getChat();
  
  await chat.sendStateTyping(); // Simulando Digitação
  await delay(1000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
  
  await client.sendMessage(msg.from, 'Qual o Endereço? ');
  chat = await msg.getChat();

  await client.sendMessage(msg.from, 'Forma de pagamento: ');
  client.sendMessage(msg.from, '\n1. Dinheiro\n2. Cartão\n3. Pix');

  if (msg.body !== null && msg.body === '1'|| msg.body === 'Produtos' && msg.from.endsWith('@c.us')) {
    await client.sendMessage(msg.from, 'Vai precisar de troco? ');
    client.sendMessage(msg.from, '\n1. Sim\n2. Não\n');
    chat = await msg.getChat();
  }

  if (msg.body !== null && msg.body === '2'|| msg.body === 'Produtos' && msg.from.endsWith('@c.us')) {
    await delay(1000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
 
  }

  if (msg.body !== null && msg.body === '3'|| msg.body === 'Produtos' && msg.from.endsWith('@c.us')) {
    client.sendMessage(msg.from, '\nChave Celular: 19992098873\nAndrea S Oliveira\nPor favor, enviar o comprovante para seu pedido ser liberado!');
    chat = await msg.getChat();

  }

  
  await client.sendMessage(msg.from, 'Tempo para entrega é de 30 a 40 minutos, podendo ser entregue antes.\n\nObrigada pela preferência!!');

 

}





  
});
