
const autoformation = [
    { name: "1.1 - Comprendre le maquettage", code: "C1" },
    { name: "2.1 - Structurer le HTML", code: "C2" },
    { name: "2.2 - Styliser avec CSS", code: "C2" },
    { name: "3.1 - JavaScript : premiers pas", code: "C3" },
    { name: "4.1 - Démarrer avec WordPress", code: "C4" },
    { name: "5.1 - Concevoir une base relationnelle", code: "C5" },
    { name: "6.1 - Connecter une application à une base de données", code: "C6" },
    { name: "7.1 - Bases et logique PHP", code: "C7" },
    { name: "8.1 - Découvrir React", code: "C8" }
  ];
  
  //compteur de bonne reponse
  let score = 0;
//   - score هو متغيّر (variable) كنستعملوه باش نحسبو عدد الأجوبة الصحيحة اللي جاوبهم المستخدم.
// - كنبدأو بـ 0 لأن فالبداية ما كاين حتى جواب صحيح.
  //Nombre total des qustions
  let totalQuestions = autoformation.length;
//   - autoformation هي مصفوفة فيها الأسئلة.
// - .length تعطيك عدد العناصر فهاد المصفوفة، يعني عدد الأسئلة.
// - totalQuestions هو متغير كيخزّن عدد الأسئلة الكاملة.



  //boucle pour poser chaque qustion
  for (let i = 0; i < totalQuestions; i++) {
      let qustion = autoformation[i];
      let reponse = prompt(`Quelle est la competence de : ${qustion.name} ?`);
    //   - كنبدأ متغيّر i من 0.
    //   - i < totalQuestions: يعني غادي ندوزو على جميع الأسئلة اللي فالمصفوفة.
    //   - كل دورة فالحلقة = سؤال جديد.
  
      while (!reponse) {
          alert("tapez une reponse");
          reponse = prompt(`Quelle est la competence de : ${qustion.name} ?`);
      }

    //   - !reponse تعني: إذا كانت الإجابة فارغة أو null (يعني المستخدم ما جاوبش أو ضغط "إلغاء").
    //   - طالما ما دخل والو، غادي ترجع true، والحلقة غادي تبقى دايرة.




      // virefication de reponse
      if (reponse && reponse.toUpperCase() === qustion.code) {
          alert("✅ Bonne reponse!");
          score++;
      } else {
          alert("❌ Mouvise reponse. la bonne reponse est : " + qustion.code);
      }
  }
  alert("🎯 Ton score final est : " + score + "/" + totalQuestions);