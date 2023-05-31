// Invocamos o leitor de qr code
const qrcode = require('qrcode-terminal');
const { Client, Buttons, List, MessageMedia, LocalAuth } = require('whatsapp-web.js'); // Mudança Buttons e Local Auth
const client = new Client();
    
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

const delay = ms => new Promise(res => setTimeout(res, ms)); // Função que usamos para criar o delay entre uma ação e outra

// Novo Funil Base Projeto

// Paradigma "await"
// Limitar a apenas numeros de celular    && msg.from.endsWith('@c.us')
// Operador lógico OU para inserir mais de uma expressão de gatilho ||
// Reactions 

client.on('message', async msg => {

  if ((msg.body === 'Olá' || msg.body === 'Olá Boa tarde' || msg.body === 'bom dia'|| msg.body === 'boa tarde'|| msg.body === 'boa noite'|| msg.body === 'Boa noite'|| msg.body === 'Bom dia'|| msg.body === 'Boa tarde'|| msg.body === 'Valor'|| msg.body === 'valor'|| msg.body === 'Valor?'|| msg.body === 'É quanto?'|| msg.body === 'Ta fazendo entrega?') && msg.from.endsWith('@c.us')) {
    const chat = await msg.getChat();
    await delay(3000); //delay de 3 segundos
    await chat.sendStateTyping(); // Simulando Digitação
    await delay(3000); //delay de 3 segundos
    await client.sendMessage(msg.from, 'Vamos iniciar o atendimento digital:\n\nDigite apenas o número da opção abaixo):\n\n[1] Cristal 20L - R$ 12.00\n[2] Cristal 10L - R$ 11.00\n[3] Viva Leve 20L - R$ 18.00\n[4] Viva Leve 10L - R$ 15.00\n[5] Serra Negra 20L (em breve)\n[6] Serra Negra 10L (em breve)');
    await delay(3000); //delay de 3 segundos
  }

  if (msg.body !== null && msg.body === '1' && msg.from.endsWith('@c.us')) {
    const chat = await msg.getChat();
    await delay(3000);
    chat.sendStateTyping(); // Simulando Digitação 
    await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
    await client.sendMessage(msg.from, 'Perfeito, você selecionou Cristal 20L - R$ 12.00\n\nDigite a quantidade de galões?\n\npor exemplo (um, dois ..):');
  }

  if (msg.body !== null && msg.body === '2' && msg.from.endsWith('@c.us')) {
    const chat = await msg.getChat();
    await delay(3000);
    chat.sendStateTyping(); // Simulando Digitação 
    await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
    await client.sendMessage(msg.from, 'Perfeito, você selecionou Cristal 10L - R$ 11.00\n\nDigite a quantidade de galões?\n\npor exemplo (um, dois ..):');
  }

  if (msg.body !== null && msg.body === '3' && msg.from.endsWith('@c.us')) {
    const chat = await msg.getChat();
    await delay(3000);
    chat.sendStateTyping(); // Simulando Digitação 
    await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
    await client.sendMessage(msg.from, 'Perfeito, você selecionou Viva Leve 20L - R$ 18.00\n\nDigite a quantidade de galões?\n\npor exemplo (um, dois ..):');
  }

  if (msg.body !== null && msg.body === '4' && msg.from.endsWith('@c.us')) {
    const chat = await msg.getChat();
    await delay(3000);
    chat.sendStateTyping(); // Simulando Digitação 
    await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
    await client.sendMessage(msg.from, 'Perfeito, você selecionou Viva Leve 10L - R$ 15.00\n\nDigite a quantidade de galões?\n\npor exemplo (um, dois ..):');
  }

  if (msg.body !== null && (msg.body === 'Um' || msg.body === 'um' ) && msg.from.endsWith('@c.us')) {
    const chat = await msg.getChat();
    await delay(3000);
    chat.sendStateTyping(); // Simulando Digitação 
    await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
    await client.sendMessage(msg.from, 'Perfeito, você vai querer 1 galão');
    chat.sendStateTyping(); // Simulando Digitação 
    await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
    await client.sendMessage(msg.from, 'Digite o ano do galão? ');
  }

  if (msg.body !== null && (msg.body === 'Dois' || msg.body === 'dois' || msg.body === 'Três' || msg.body === 'Tres' || msg.body === 'três' || msg.body === 'tres' 
    || msg.body === 'Quatro' || msg.body === 'quatro' || msg.body === 'Cinco' || msg.body === 'cinco' || msg.body === 'Seis' || msg.body === 'seis') && msg.from.endsWith('@c.us')) {
        
      const chat = await msg.getChat();
      await delay(3000);
      chat.sendStateTyping(); // Simulando Digitação 
      await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
      await client.sendMessage(msg.from, 'Perfeito, você vai querer ' +  msg.body.toString() + ' galões ');
      chat.sendStateTyping(); // Simulando Digitação 
      await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
      await client.sendMessage(msg.from, 'Digite o ano dos galões?\n\npor exemplo (2020,2021,2022 ...');
  }

  aux = msg.body.slice(0,4);
  if (msg.body !== null && (aux == '2020' ||  aux === '2021' || aux === '2022' || aux === '2023' || aux === '2024' || aux === '2025' 
    || aux === '2026' || aux === '2027' || aux === '2028' || aux === '2029' || aux === '2030' || aux === '2031') && msg.from.endsWith('@c.us')) {
      const chat = await msg.getChat();
      await delay(3000);
      chat.sendStateTyping(); // Simulando Digitação 
      await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
      await client.sendMessage(msg.from, 'Perfeito, me fale agora qual o Endereço?')   
  }

  aux = msg.body.split(' ');
  if (aux[0] !== null && (aux[0] === 'Rua' || aux[0] === 'rua' || aux[1] === 'RUA' || aux[0] === 'AV' || aux[0] === 'Av'  
        || aux[0] === 'av' || aux[0] === 'Avenida' || aux[0] === 'avenida' || aux[0] === 'AVENIDA') && msg.from.endsWith('@c.us')) {
      const chat = await msg.getChat();
      chat.sendStateTyping(); // Simulando Digitação 
      await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
      await client.sendMessage(msg.from, 'Perfeito, por favor escolha uma forma de pagamento:\Dinheiro\Cartão\nPix')
  }

  if (msg.body !== null && msg.body === 'Dinheiro'|| msg.body === 'dinheiro'|| msg.body === 'em especie' && msg.from.endsWith('@c.us')) {
    const chat = await msg.getChat();     
    await delay(3000);
    chat.sendStateTyping(); // Simulando Digitação 
    await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
    await client.sendMessage(msg.from, 'Perfeito, Vai precisar de troco? Sim ou não?');
  }

  if (msg.body !== null && ( msg.body === 'sim' || msg.body === 'Sim' || msg.body === 'SIM' )  && msg.from.endsWith('@c.us')) {
    const chat = await msg.getChat();
    await delay(3000);
    await client.sendMessage(msg.from, 'Pra quanto?');
    if (msg.body !== null  && msg.from.endsWith('@c.us')) {
      const chat = await msg.getChat();
      await delay(10000);
      chat.sendStateTyping(); // Simulando Digitação 
      await delay(3000);
      await client.sendMessage(msg.from, 'OK!');
      chat.sendStateTyping(); // Simulando Digitação 
      await delay(3000);
      await client.sendMessage(msg.from, 'Tempo para entrega é de 30 a 40 minutos, podendo ser entregue antes.\n\nObrigada pela preferência!!');
    }
  }
  
  if (msg.body !== null && ( msg.body === 'nao' || msg.body === 'não' || msg.body === 'NÃO' || msg.body === 'NAO' )  && msg.from.endsWith('@c.us')) {
    const chat = await msg.getChat();
    await delay(3000);
    chat.sendStateTyping(); // Simulando Digitação 
    await delay(3000);
    await client.sendMessage(msg.from, 'Tempo para entrega é de 30 a 40 minutos, podendo ser entregue antes.\n\nObrigada pela preferência!!'); 
  }

  if (msg.body !== null && msg.body === 'pix'|| msg.body === 'Pix'|| msg.body === 'PIX' && msg.from.endsWith('@c.us')) {
    const chat = await msg.getChat();
    await delay(3000);
    chat.sendStateTyping(); // Simulando Digitação 
    await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
    await client.sendMessage(msg.from, 'Chave Celular: 19992098873\nAndrea S Oliveira\nPor favor, enviar o comprovante para seu pedido ser liberado!');
    await delay(3000);
    chat.sendStateTyping(); // Simulando Digitação 
    await delay(3000);
    await client.sendMessage(msg.from, 'Tempo para entrega é de 30 a 40 minutos depois do envio do comprovante, podendo ser entregue antes.\n\nObrigada pela preferência!!');
  }

  if (msg.body !== null && (msg.body === 'cartão'|| msg.body === 'Cartão'|| msg.body === 'CARTÃO' || msg.body === 'cartao'|| msg.body === 'Cartao'|| msg.body === 'CARTAO' ) && msg.from.endsWith('@c.us')) {
    const chat = await msg.getChat();
    await delay(3000);
    chat.sendStateTyping(); // Simulando Digitação 
    await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
    await client.sendMessage(msg.from, 'OK');
    await delay(3000);
    chat.sendStateTyping(); // Simulando Digitação 
    await delay(3000);
    await client.sendMessage(msg.from, 'Tempo para entrega é de 30 a 40 minutos, podendo ser entregue antes.\n\nObrigada pela preferência!!');
  }
});