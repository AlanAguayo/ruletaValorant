var rAgente;
var rPlayer;

var cardSize = 304;

var nCardsPlayer = 1000;
var nCardsAgent = 1000;

var player = ['XaviOuO', "Lalocomotora", "AdventureFight", "Naizof", 'Ferru777'];
var filteredPlayers = ['XaviOuO', "Lalocomotora", "AdventureFight", "Naizof", 'Ferru777'];

var agent = [
  { name: "Brimstone", image: "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/fullportrait.png" },
  { name: "Viper", image: "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/fullportrait.png" },
  { name: "Omen", image: "https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/fullportrait.png" },
  { name: "Killjoy", image: "https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/fullportrait.png" },
  { name: "Cypher", image: "https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/fullportrait.png" },
  { name: "Sova", image: "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/fullportrait.png" },
  { name: "Sage", image: "https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/fullportrait.png" },
  { name: "Phoenix", image: "https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/fullportrait.png" },
  { name: "Jett", image: "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/fullportrait.png" },
  { name: "Reyna", image: "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/fullportrait.png" },
  { name: "Raze", image: "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/fullportrait.png" },
  { name: "Breach", image: "https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/fullportrait.png" },
  { name: "Skye", image: "https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/fullportrait.png" },
  { name: "Yoru", image: "https://media.valorant-api.com/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/fullportrait.png" },
  { name: "Astra", image: "https://media.valorant-api.com/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/fullportrait.png" },
  { name: "KAY/O", image: "https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/fullportrait.png" },
  { name: "Chamber", image: "https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/fullportrait.png" },
  { name: "Neon", image: "https://media.valorant-api.com/agents/bb2a4828-46eb-8cd1-e765-15848195d751/fullportrait.png" },
  { name: "Fade", image: "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/fullportrait.png" },
  { name: "Harbor", image: "https://media.valorant-api.com/agents/95b78ed7-4637-86d9-7e41-71ba8c293152/fullportrait.png" },
  { name: "Gekko", image: "https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/fullportrait.png" },
  { name: "Deadlock", image: "https://media.valorant-api.com/agents/cc8b64c8-4b25-4ff9-6e7f-37b4da43d235/fullportrait.png" },
];

var filteredAgents = [
  { name: "Brimstone", image: "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/fullportrait.png" },
  { name: "Viper", image: "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/fullportrait.png" },
  { name: "Omen", image: "https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/fullportrait.png" },
  { name: "Killjoy", image: "https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/fullportrait.png" },
  { name: "Cypher", image: "https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/fullportrait.png" },
  { name: "Sova", image: "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/fullportrait.png" },
  { name: "Sage", image: "https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/fullportrait.png" },
  { name: "Phoenix", image: "https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/fullportrait.png" },
  { name: "Jett", image: "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/fullportrait.png" },
  { name: "Reyna", image: "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/fullportrait.png" },
  { name: "Raze", image: "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/fullportrait.png" },
  { name: "Breach", image: "https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/fullportrait.png" },
  { name: "Skye", image: "https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/fullportrait.png" },
  { name: "Yoru", image: "https://media.valorant-api.com/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/fullportrait.png" },
  { name: "Astra", image: "https://media.valorant-api.com/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/fullportrait.png" },
  { name: "KAY/O", image: "https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/fullportrait.png" },
  { name: "Chamber", image: "https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/fullportrait.png" },
  { name: "Neon", image: "https://media.valorant-api.com/agents/bb2a4828-46eb-8cd1-e765-15848195d751/fullportrait.png" },
  { name: "Fade", image: "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/fullportrait.png" },
  { name: "Harbor", image: "https://media.valorant-api.com/agents/95b78ed7-4637-86d9-7e41-71ba8c293152/fullportrait.png" },
  { name: "Gekko", image: "https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/fullportrait.png" },
  { name: "Deadlock", image: "https://media.valorant-api.com/agents/cc8b64c8-4b25-4ff9-6e7f-37b4da43d235/fullportrait.png" },
];

$(document).ready(function () {
  showCardAgents();
  showCardPlayers();
  showListPlayers();
  showListAgents();

  $('#start').on('click', function () {
    rPlayer = Math.floor(Math.random() * filteredPlayers.length);
    rAgente = Math.floor(Math.random() * filteredAgents.length);

    spinWheel(rAgente, ".agent", filteredAgents.length, 5)
    setTimeout(function () {
      spinWheel(rPlayer, ".player", filteredPlayers.length, 10);
    }, 6000);

    $('button').prop('disabled', true);

    setTimeout(function () {
      $('button').prop('disabled', false);
    }, 12100);
  });

  $('#player1, #player2, #player3, #player4, #player5').on('input', function () {
    console.log('sadafasfa');
    for (var i = 1; i < player.length + 1; i++) {
      player[i - 1] = $('#player' + i).val();
    }
    showCardPlayers();
  });

  $('.checkPlayer').on('change', function () {
    updateEnabledPlayers();
    showCardPlayers();
  });

  $('.checkAgent').on('change', function () {
    loadStyleAgent();
    updateEnabledAgents();
    showCardAgents();
  });

  $('#reset').on('click', function () {
    $('.checkPlayer').prop('checked', true);
    updateEnabledPlayers();
    $('.checkAgent').prop('checked', true);
    updateEnabledAgents();
    loadStyleAgent();
    showCardPlayers();
    showCardAgents();
  })

});

//Carga el estylo habilitado o deshabilitado
function loadStyleAgent() {
  for (var i = 1; i < agent.length + 1; i++) {
    if ($('#checkAgent' + i).prop('checked')) {
      $('#agent' + i).css({
        'color': 'white',
      });
    } else {
      $('#agent' + i).css({
        'color': 'grey',
      });
    }
  }
}

//Muestra en las tarjetas de los nombres de los jugadores
function showCardPlayers() {
  var wheel = $('.player .wheel');

  var row = "<div class='row'>";
  player.forEach(element => {
    if (element != '') {
      row += "  <div class='cardPlayer'>" + element + "<\/div>";
    }

  });
  row += "</div>";

  wheel.html("");
  if (filteredPlayers.length != 0) {
    var nCards = nCardsPlayer / filteredPlayers.length;

    for (var x = 0; x <= nCards; x++) {
      wheel.append(row);
    }
  }
}

//Muestra las tarjetas de los agentes
function showCardAgents() {
  var wheel = $('.agent .wheel');
  var row = "<div class='row'>";

  agent.forEach(element => {
    if (element.name != '') {
      row += "<div class='cardAgent'><img class='agentImage' src='" + element.image + "' alt=" + element.name + "><div class='agentName'>" + element.name + "</div></div>";
    }

  })

  row += "</div>";

  wheel.html("");

  if (filteredAgents.length != 0) {
    var nCards = nCardsAgent / filteredAgents.length;

    for (var x = 0; x <= nCards; x++) {
      wheel.append(row);
    }
  }
}

//Actualiza los jugadores activos
function updateEnabledPlayers() {
  for (var x = 1; x < player.length + 1; x++) {
    if ($('#checkPlayer' + x).prop('checked')) {
      player[x - 1] = $('#player' + x).val();
      $('#player' + x).prop('disabled', false);
    } else {
      $('#player' + x).prop('disabled', true);
      player[x - 1] = '';
    }
  }

  filteredPlayers = player.filter(function (element) {
    return element !== '';
  });

  if (filteredPlayers.length == 0 || filteredAgents.length == 0) {
    $('#start').prop('disabled', true);
  } else {
    $('#start').prop('disabled', false);
  }
}

//Actualiza los agentes activos
function updateEnabledAgents() {
  for (var x = 1; x < agent.length + 1; x++) {
    if ($('#checkAgent' + x).prop('checked')) {
      agent[x - 1].name = $('#agent' + x).text();
    } else {
      agent[x - 1].name = '';
    }
  }

  filteredAgents = agent.filter(function (element) {
    return element.name !== '';
  });

  if (filteredPlayers.length == 0 || filteredAgents.length == 0) {
    $('#start').prop('disabled', true);
  } else {
    $('#start').prop('disabled', false);
  }
}

//Mostrar la lista de jugadores
function showListPlayers() {
  for (var x = 1; x < player.length + 1; x++) {
    $('#player' + x).val(player[x - 1]);
  }
}

//Mostrar la lista de agentes
function showListAgents() {
  var agents = $('.listAgents');
  var listAgents = "<ul class='cAgents'>";

  for (var x = 1; x < agent.length + 1; x++) {
    listAgents += '<li><label id="agent' + x + '" class="lAgent"><input type="checkbox" class="checkAgent" id="checkAgent' + x + '" checked> ' + agent[x - 1].name + '</label></li>';
  }

  listAgents += "</ul>"

  agents.html(listAgents);
}

//Animacion de la ruleta
function spinWheel(roll, roulette, length, speed) {
  var wheel = $(roulette);

  var landingPosition = (speed * length * cardSize) + (roll * cardSize);

  var randomize = Math.floor(Math.random() * (cardSize - 4)) - ((cardSize - 4) / 2);

  landingPosition = landingPosition + randomize;

  var object = {
    x: Math.floor(Math.random() * 50) / 100,
    y: Math.floor(Math.random() * 20) / 100
  };

  wheel.css({
    'transition-timing-function': 'cubic-bezier(0,' + object.x + ',' + object.y + ',1)',
    'transition-duration': '6s',
    'transform': 'translate3d(-' + landingPosition + 'px, 0px, 0px)'
  });

  setTimeout(function () {
    wheel.css({
      'transition-timing-function': '',
      'transition-duration': '',
    });

    var resetTo = -(roll * cardSize + randomize);
    wheel.css('transform', 'translate3d(' + resetTo + 'px, 0px, 0px)');
  }, 6000);

}
