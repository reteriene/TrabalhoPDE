function calculate() {
    var idade = document.getElementById('idade').value;
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;
      var IMC = idade / (peso * (altura * altura));
      var fator_de_comorbidade = 0;

      if (IMC < 18.5){
          fator_de_comorbidade = 10;
      } else if (IMC >= 18.5 && IMC < 25){
          fator_de_comorbidade = 1;
      } else if (IMC >= 25 && IMC < 30){
          fator_de_comorbidade = 6;
      } else if (IMC >= 30 && IMC < 35){
          fator_de_comorbidade = 10;
      } else if (IMC >= 35 && IMC < 40){
          fator_de_comorbidade = 20;
      } else if (IMC >= 40){
          fator_de_comorbidade = 30;
      }
    
      planA_basic = 100 + (idade * 10 * (IMC / 10))
      planA_standard = 150 + (idade * 15) * (IMC / 10)
      planA_premium = 200 - (IMC * 10) + (idade * 20) * (IMC / 10)

      planB_basic = 100 + (fator_de_comorbidade * 10 * (IMC / 10))
      planB_standard = 150 + (fator_de_comorbidade * 15) * (IMC / 10)
      planB_premium = 200 - (IMC * 10) + (fator_de_comorbidade * 20) * (IMC / 10)
      
    
    document.getElementById('planA-basic').innerText = 'R$' + Math.round(planA_basic);
    document.getElementById('planA-standard').innerText = 'R$' + Math.round(planA_standard);
    document.getElementById('planA-premium').innerText = 'R$' + Math.round(planA_premium);

    document.getElementById('planB-basic').innerText = 'R$' + Math.round(planB_basic);
    document.getElementById('planB-standard').innerText = 'R$' + Math.round(planB_standard);
    document.getElementById('planB-premium').innerText = 'R$' + Math.round(planB_premium);

    document.getElementById('result').style.display = 'block';

    var bestPlanUnimed = determineBestPlanUnimed();
    var bestPlanPagueMenos = determineBestPlanPagueMenos();
    document.getElementById('bestPlanText').innerText = "Com base em nossos cálculos dos preços, recomendamos o Plano " + bestPlanUnimed + ", e o Plano " + bestPlanPagueMenos;
    document.getElementById('bestPlan').style.display = 'block';
  }

  function determineBestPlanUnimed() {
    
    if (planA_basic < planA_standard && planA_basic < planA_premium) {
      return "Básico da Unimed";
    } else if (planA_standard < planA_premium){
      return "Standard da Unimed";
    } else {
      return "Premium da Unimed"
    }
  }
  function determineBestPlanPagueMenos() {
    if (planB_basic < planB_standard && planB_basic < planB_premium) {
      return "Básico da Pague Menos";
    } else if (planB_standard < planB_premium){
      return "Standard da Pague Menos";
    } else {
      return "Premium da Pague Menos"
    }
  }
  