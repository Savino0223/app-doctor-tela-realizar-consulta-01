//script para formatar cpf xxx.xxx.xxx.xx
function formataCPF(cpf) {
    const elementoAlvo = cpf
    const cpfAtual = cpf.value

    let cpfAtualizado;

    cpfAtualizado = cpfAtual.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,
     function( regex, argumento1, argumento2, argumento3, argumento4 ) {
            return argumento1 + '.' + argumento2 + '.' + argumento3 + '-' + argumento4;
    })
    elementoAlvo.value = cpfAtualizado;
    }


//script para formatar cep xxx.xxx.xxx.xx

function formataCEP(cep) {
    const elementoAlvo = cep
    const cepAtual = cep.value

    let cepAtualizado;

    cepAtualizado = cepAtual.replace(/(\d{5})(\d{3})/,
     function( regex, argumento1, argumento2) {
            return argumento1 + '-' + argumento2;
    })
    elementoAlvo.value = cepAtualizado;
    }





//script para formatar telefone (xx)xxxxx-xxxx -->

  function mascaraTelefone(event) {
      let tecla = event.key;
      let telefone = event.target.value.replace(/\D+/g, "");

      if (/^[0-9]$/i.test(tecla)) {
          telefone = telefone + tecla;
          let tamanho = telefone.length;

          if (tamanho >= 12) {
              return false;
          }

          if (tamanho > 10) {
              telefone = telefone.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
          } else if (tamanho > 5) {
              telefone = telefone.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
          } else if (tamanho > 2) {
              telefone = telefone.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
          } else {
              telefone = telefone.replace(/^(\d*)/, "($1");
          }

          event.target.value = telefone;
      }

      if (!["Backspace", "Delete"].includes(tecla)) {
          return false;
      }
  }

