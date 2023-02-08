const elTemplate = document.querySelector('#template-item');
const elListe = document.querySelector('#liste');
const elTEmplateError = document.querySelector('#template-error')
const msgError = document.querySelector('.msg-error');
// Détecter la soumission du formulaire
const elForm = document.querySelector('form');
const para = document.querySelector('.para');
// Pour vérifier si la variable est un nombre
// let pommes = '2';
// console.log(Number.isInteger(Number(pommes)));

// Liste des items
let listeItems = [];

// Récupérer les valeurs par défaut de quantité et unité
const elQuantite = elTemplate.content.querySelector('.quantite');
const unite = elTemplate.content.querySelector('.unite');
// console.log(unite);
// console.log(unite.textContent);
// console.log(unite.value);
// console.log(Number(elQuantite.textContent));
const DEFAUT_QUANTITE = Number(elQuantite.textContent);
const DEFAUT_UNITE = unite.selectedOptions[0].value;
// console.log(DEFAUT_UNITE);
// console.log(unite.selectedOptions[0].value);
// console.log(unite.options);
const unities = [];
for (const option of unite.options) {
    // console.log(option.textContent);
    unities.push(option.textContent);
}

// console.log(unities);
const CLE_LOCAL_STORAGE = "liste";
const elLi = elTemplate.content.cloneNode(true);

const elPoignee = elLi.querySelector('.poignee');
console.log(elPoignee);

// Chargemet des donnes depuis le localstorage
const getListeStorage = localStorage.getItem(CLE_LOCAL_STORAGE);
const parseString = JSON.parse(getListeStorage);
// console.log(parseString);
// Créer un élément <li> à partir du template
elPoignee.addEventListener('mousedown', demarrerDeplacement);

function demarrerDeplacement(e) {
    console.log(e.currentTarget);
    const poignee = e.currentTarget;
    const li = poignee.closest('li');
    li.setAttribute('draggable', 'true');
    console.log(li);

}

elPoignee.addEventListener('dragstart', (event) => {
    console.log('drag start');
    console.log(event);
    console.log(event.target);

})



// S'il y a dse données à charger
if (getListeStorage !== null) {
    // on les charge
    listeItems = JSON.parse(getListeStorage)

    for (let i = 0; i < listeItems.length; i++) {
        // On crée pour chaque objet un élément <li>
        // Créer un élément <li> à partir du template
        const elLi = elTemplate.content.cloneNode(true);
        const elNom = elLi.querySelector('.nom');
        const elQuantite = elLi.querySelector('.quantite');
        const elUnite = elLi.querySelector('.unite');
        const elSupprimer = elLi.querySelector('.supprimer');
        console.log(elSupprimer);
        const elPoignee = elLi.querySelector('.poignee');
        console.log(elPoignee);


        elPoignee.addEventListener('dragstart', (event) => {
            console.log('drag start');
            console.log(event);
            console.log(event.target);

        })

        elPoignee.addEventListener('dragend', (event) => {
            console.log('drag end');
            console.log(event);
            console.log(event.target);

        })


        // elPoignee.addEventListener('mousedown', demarrerDeplacement);

        // function demarrerDeplacement(e) {
        //     console.log(e.currentTarget);
        //     const poignee = e.currentTarget;
        //     poignee.setAttribute('draggable', 'true');
        //     const li = poignee.closest('li');
        //     const pNom = poignee.closest('p');
        //     console.log(pNom);
        //     li.setAttribute('draggable', 'true');
        //     console.log(li);

        // }


        function indexDeLiDansListe(element) {
            const li = element.closest('li');
            console.log(li);
            const enfants = Array.from(elListe.children);
            console.log(enfants);
            console.log(enfants.indexOf(li));
            return enfants.indexOf(li)
        }

        elSupprimer.addEventListener('click', function (e) {
            console.log("click sur supprimer");
            // Détecter sur quel élément on a cliqué ?
            console.log(e.currentTarget);
            // console.log(elListe.children);
            // const enfants = Array.from(elListe.children);
            // console.log(enfants);
            const element = e.currentTarget;
            const li = element.closest('li');
            console.log(li);
            const indexListe = indexDeLiDansListe(e.currentTarget);
            li.classList.add("fall");
            // console.log(indexListe);

            // console.log(listeItems);
            // console.log(listeItems[indexListe]);
            // listeItems.filter(deleteItemListe);
            // console.log(indexListe);
            // console.log(listeItems.indexOf(indexListe));
            // function deleteItemListe(obj) {
            //     console.log(typeof(listeItems[indexListe]));
            //     console.log(typeof(indexListe));
            //     if (listeItems[indexListe] != indexListe) {
            //        return true;
            //     } 

            listeItems.splice(indexListe, 1);
            console.log(listeItems);
            localStorage.setItem("liste", JSON.stringify(listeItems));

            console.log(listeItems);
            setTimeout(() => {
                console.log('DELETE ITEM');
                elListe.children[indexListe].remove();
            }, 2000)






            // console.log(indexDeLiDansListe(e.target));
            // const indexElement = indexDeLiDansListe(e.target)
            // Supprimer cet élément 
            // const getListeStorage = localStorage.getItem("liste");
            // const listeItems = JSON.parse(getListeStorage);
            // console.log(listeItems);
            // listeItems.splice(indexElement, 1);
            // sauvegarde();
            console.log(elListe.children);
            // elListe.children[index].remove();

            const updateDeleteItems = [];

            // for (const liste of listeItems) {
            //     console.log(liste);
            // listeItems.filter(function(el, key)) {
            //     console.log(el, key);
            // });
            // }
            // for (const key in listeItems) {
            //     console.log(listeItems[key]);
            //     console.log(key);
            //     console.log(indexElement);
            //     function delteElListe(listeItems, key) {
            //         console.log(listeItems, key);
            //     }
            // }


            // Supprimer l'item <li> de la liste <ul>
            // replaceFocus();
        })

        elNom.textContent = parseString[i].nom;
        elQuantite.textContent = parseString[i].quantite;
        elUnite.value = parseString[i].unite

        // On ajoute l'élément à la liste <ul>
        elListe.append(elLi);

        // elListe.append(elNom);
        // elListe.append(elQuantite);
        // elListe.append(elUnite);

        console.log(elNom);
        function rempalcerParaParInput(e) {
            // console.log(e.target);
            const elP = e.target;
            // Transformation de l'élément <p> en <input type="text">
            // Créer un <input>
            const elInput = document.createElement('input');
            // elInput.type = "text";
            // elInput.className = elNom.className;

            // On acliqué sur la classe  nom ou la classe quantite ?
            const elClassList = elP.classList.contains("nom") ? true : false;
            // console.log(elClassList);
            if (elClassList === true) {
                console.log(e.target);
                elInput.type = "text";
                console.log(e.target);
                const element = e.target;
                const arrayChild = elListe.children;
                console.log(arrayChild);
                const children = Array.from(arrayChild);
                // console.log(children);
                console.log(element.closest('li'));
                const li = element.closest('li');
                console.log(children.indexOf(li));

                // Injecter le nom provenant de <p> dans <input>
                const nom = elNom.textContent;
                // console.log(nom);
                // Injecter le nom de <p> dans <input>
                elInput.value = nom;
                elInput.classList.add('input-name');
                // elInput.setAttribute('value', nom);
                //Remplacer l'élément <p> par <input>
                elNom.replaceWith(elInput);
                // UX
                elInput.focus();
                // console.log(elInput);
                // Lorsque le focus n'est plus actif(clic en dehors de l'input) blur déclenche cette fonction
                elInput.addEventListener('blur', function (e) {
                    console.log("blur");
                    // console.log(e);
                    elNom.textContent = elInput.value;
                    // Remplace l'élément <input> par <p>
                    elInput.replaceWith(elNom);
                    console.log(e.target);
                    const element = e.target;
                    // elInput.type = "text";
                    console.log(element.closest('li'));
                    const li = element.closest('li');
                    // console.log(elListe);
                    // console.log(elListe.children);
                    const arrayChild = elListe.children;
                    console.log(arrayChild);
                    const children = Array.from(arrayChild);
                    console.log(children);
                    console.log(children[1]);
                    console.log(children.indexOf(li));

                    let nomProductListe;
                    let quantiteProductListe;
                    let uniteProductListe;
                    let updateListe = [];
                    for (const liste of elListe.children) {
                        console.log(liste.children);
                        for (let i = 0; i < liste.children.length; i++) {
                            nomProductListe = liste.children[1].textContent;
                            // console.log(nomProductListe);
                            quantiteProductListe = liste.children[4].textContent;
                            // console.log(quantiteProductListe);
                            uniteProductListe = liste.children[5].children[0].value;
                            // console.log(uniteProductListe);

                        }
                        const objectItem = {
                            nom: nomProductListe.charAt(0).toUpperCase() + nomProductListe.slice(1),
                            quantite: quantiteProductListe,
                            unite: uniteProductListe
                        }
                        console.log(objectItem);
                        updateListe.push(objectItem);
                        // listeItems.splice(0, 3,objectItem);

                        // let listeItems = [];
                        // listeItems = updateListe;
                        console.log(updateListe);
                        localStorage.setItem("liste", JSON.stringify(updateListe));
                        console.log(JSON.parse(localStorage.getItem('liste1')));



                    }


                });
                // Si on apuie sur ENTREE, il faut également remplacer par <p>
                elInput.addEventListener('keyup', function (e) {
                    console.log('keyup');
                    console.log(e);


                    console.log(e.key);
                    if (e.key === "Enter") {
                        console.log('ENTREE');
                        elNom.textContent = elInput.value;
                        // Remplace l'élément <input> par <p>
                        elInput.replaceWith(elNom);
                        console.log(e.target);
                        const element = e.target;
                        // elInput.type = "text";
                        console.log(element.closest('li'));
                        const li = element.closest('li');
                        let nomProductListe;
                        let quantiteProductListe;
                        let uniteProductListe;
                        let updateListe = [];

                        for (const liste of elListe.children) {
                            console.log(liste.children);
                            for (let i = 0; i < liste.children.length; i++) {
                                nomProductListe = liste.children[1].textContent;
                                console.log(nomProductListe);
                                quantiteProductListe = liste.children[4].textContent;
                                console.log(quantiteProductListe);
                                uniteProductListe = liste.children[5].children[0].value;
                                console.log(uniteProductListe);

                            }
                            const objectItem = {
                                nom: nomProductListe.charAt(0).toUpperCase() + nomProductListe.slice(1),
                                quantite: quantiteProductListe,
                                unite: uniteProductListe
                            }
                            console.log(objectItem);
                            updateListe.push(objectItem);
                            console.log(updateListe);
                            localStorage.setItem("liste", JSON.stringify(updateListe));
                            console.log(JSON.parse(localStorage.getItem('liste')));



                        }




                    }
                })
                // replaceFocus();

            } else if (elClassList === false) {
                // console.log('false');
                console.log(e.target);
                const element = e.target;
                const arrayChild = elListe.children;
                console.log(arrayChild);
                const children = Array.from(arrayChild);
                // console.log(children);
                console.log(element.closest('li'));
                const li = element.closest('li');
                const indexProductUpdate = console.log(children.indexOf(li));


                elQuantite.replaceWith(elInput);
                elInput.type = "number";
                elInput.min = "1";
                elInput.max = "999";
                elInput.classList.add('input-quantite');
                let quantiteProductListe;
                // UX
                elInput.focus();

                // Lorsque le focus n'est plus actif(clic en dehors de l'input) blur déclenche cette fonction
                elInput.addEventListener('blur', function (e) {
                    console.log("blur");
                    // quantiteProductListe = elQuantite.textContent = elInput.value;
                    // Remplace l'élément <input> par <p>
                    //    console.log(quantiteProductListe);
                    elInput.replaceWith(elQuantite);
                    elQuantite.textContent = elInput.value;

                    console.log(e.target);
                    const element = e.target;
                    elInput.type = "text";
                    console.log(element.closest('li'));
                    const li = element.closest('li');
                    console.log(elListe);
                    console.log(elListe.children);
                    // const arrayChild = elListe.children;
                    // console.log(arrayChild);
                    console.log(elListe);
                    console.log(elListe.children);
                    const arrayChild = elListe.children;
                    console.log(arrayChild);
                    const children = Array.from(arrayChild);
                    console.log(children);

                    let nomProductListe;
                    let quantiteProductListe;
                    let uniteProductListe;
                    let updateListe = [];

                    for (const liste of elListe.children) {
                        console.log(liste.children);
                        for (let i = 0; i < liste.children.length; i++) {
                            nomProductListe = liste.children[1].textContent;
                            console.log(nomProductListe);
                            quantiteProductListe = liste.children[4].textContent;
                            console.log(quantiteProductListe);
                            uniteProductListe = liste.children[5].children[0].value;
                            console.log(uniteProductListe);

                        }
                        const objectItem = {
                            nom: nomProductListe.charAt(0).toUpperCase() + nomProductListe.slice(1),
                            quantite: quantiteProductListe,
                            unite: uniteProductListe
                        }
                        console.log(objectItem);
                        updateListe.push(objectItem);
                        console.log(updateListe);
                        localStorage.setItem("liste", JSON.stringify(updateListe));
                        console.log(JSON.parse(localStorage.getItem('liste')));

                    }

                })
                // Si on apuie sur ENTREE, il faut également remplacer par <p>
                elInput.addEventListener('keyup', function (e) {
                    console.log('keyup');
                    console.log(e);


                    console.log(e.key);
                    if (e.key === "Enter") {
                        console.log('ENTREE');
                        elQuantite.textContent = elInput.value;
                        // Remplace l'élément <input> par <p>
                        elInput.replaceWith(elQuantite);
                        // Remplace l'élément <input> par <p>
                        console.log(e.target);
                        const element = e.target;
                        // elInput.type = "text";
                        // console.log(element.closest('li'));
                        const li = element.closest('li');
                        let nomProductListe;
                        let quantiteProductListe;
                        let uniteProductListe;
                        let updateListe = [];
                        const arrayChild = elListe.children;
                        console.log(arrayChild);
                        console.log(elListe);



                        for (const liste of elListe.children) {
                            console.log(liste.children);
                            for (let i = 0; i < liste.children.length; i++) {
                                nomProductListe = liste.children[1].textContent;
                                console.log(nomProductListe);
                                quantiteProductListe = liste.children[4].textContent;
                                console.log(quantiteProductListe);
                                uniteProductListe = liste.children[5].children[0].value;
                                console.log(uniteProductListe);

                            }
                            const objectItem = {
                                nom: nomProductListe.charAt(0).toUpperCase() + nomProductListe.slice(1),
                                quantite: quantiteProductListe,
                                unite: uniteProductListe
                            }
                            console.log(objectItem);
                            updateListe.push(objectItem);
                            console.log(updateListe);
                            localStorage.setItem("liste", JSON.stringify(updateListe));
                            console.log(JSON.parse(localStorage.getItem('liste')));



                        }

                    }
                })
                // replaceFocus();


            }







        }
        elQuantite.addEventListener('focus', rempalcerParaParInput)

        elNom.addEventListener('focus', rempalcerParaParInput)




    }

}

console.log(listeItems);
// On récupére le template
// const elTemplate = document.querySelector('#template-item');
// Créer un élément <li> à partir du template






// On récupére le template
// Créer un élément <li> à partir du template
// const elLi = elTemplate.content.cloneNode(true);
// Selection de l'élément input du formulaire
const elNouvelItem = document.querySelector('#nouvel-item');


// Sélection des élément html paragraphe et select
// const elNom = elLi.querySelector('.nom');
// const elUnite = elLi.querySelector('.unite');
// console.log(elQuantite);
// console.log(elUnite);
// console.log(elNouvelItem);

// Ecoute de l'évènement focus sur elNom



// Placer le focus sur l'élément input
// elNouvelItem.focus();

// Vider le champs nouvel item aprés avoir cliquez sur le botuon ajouter
elNouvelItem.value = "";







elForm.addEventListener('submit', function (e) {
    console.log('submit form');
    // On empêche le rechargement de la page
    e.preventDefault();

    // Créer un élément <li> à partir du template
    const elLi = elTemplate.content.cloneNode(true);


    // Récupérer la valeur de l'input nouvel item
    let nomItem = elNouvelItem.value;
    // console.log(nomItem);

    // Supprimer ls espaces en trop avant et aprés le nom
    nomItem = nomItem.trim();
    // Méthode avec une boucle pour chercher si la 
    // chaîne contient un double 
    // Supprimer les espaces d'affilés en trop
    // Tant qu'il y a 2 espaces d'affilés
    // Remplacer les 2 espaces par 1 seul espace

    // while (nomItem.indexOf("  ") !== -1) {
    //    nomItem = nomItem.replace("  ", " ")
    // }

    nomItem = nomItem.replace(/ {2,}/g, " ");
    console.log(nomItem);

    // const arrayItems = [];
    // arrayItems.push(nomItem);
    // console.log(arrayItems);
    // for (let i = 0; i < nomItem.length; i++) {
    //     const arrayItems = nomItem[i];
    //     console.log(arrayItems);
    // }

    extraireDonnees(nomItem);
    let objet = nomItem.split(' ');
    console.log(objet);
    let firstWord = objet[0];
    console.log(objet[0]);
    let secondWord = objet[1];
    console.log(objet[1]);
    let thirdWord = objet[2];
    console.log(objet[2]);
    let fourthWord = objet[3];
    console.log(objet[3]);
    let fifthWord = objet[4];
    console.log(objet[4]);



    if (Number.isInteger(Number(firstWord)) && !unities.includes(secondWord)) {
        console.log('premier mot nbre et deuxieme pas une unite');

        // <quantite> <nom> 
        // objectItem.nom = troisiemeMot.charAt(0).toUpperCase() + troisiemeMot.slice(1);

        console.log('un nbre suivi du nom de l\'objet');
        if (thirdWord === undefined) {
            console.log(thirdWord);
            const objectItem = {
                nom: secondWord.charAt(0).toUpperCase() + secondWord.slice(1),
                quantite: firstWord,
                unite: 'u.'
            }
            console.log(objectItem);
            listeItems.push(objectItem);

        } else {
            console.log(thirdWord);

            const objectItem = {
                nom: secondWord.charAt(0).toUpperCase() + secondWord.slice(1) + ' ' + thirdWord,
                quantite: firstWord,
                unite: 'u.'
            }
            console.log(objectItem);
            listeItems.push(objectItem);

        }
        localStorage.setItem("liste", JSON.stringify(listeItems));

    }



    if (Number.isInteger(Number(firstWord)) && unities.includes(secondWord)) {
        console.log('premier mot nbre et deuxieme unite');
        // <quantite> <unite> <nom> 
        // objectItem.nom = troisiemeMot.charAt(0).toUpperCase() + troisiemeMot.slice(1);

        console.log('le deuxieme mot est une unite');
        if (fourthWord === undefined) {
            const objectItem = {
                nom: thirdWord.charAt(0).toUpperCase() + thirdWord.slice(1) + fourthWord,
                quantite: firstWord,
                unite: secondWord
            }
            console.log(objectItem);
            listeItems.push(objectItem);


        } else {
            if (fifthWord === undefined) {
                const objectItem = {
                    nom: thirdWord.charAt(0).toUpperCase() + thirdWord.slice(1) + ' ' + fourthWord,
                    quantite: firstWord,
                    unite: secondWord
                }
                console.log(objectItem);
                listeItems.push(objectItem);
     
            } else {
                const objectItem = {
                    nom: thirdWord.charAt(0).toUpperCase() + thirdWord.slice(1) + ' ' + fourthWord + ' ' + fifthWord,
                    quantite: firstWord,
                    unite: secondWord
                }
                console.log(objectItem);
                listeItems.push(objectItem);

            }

        }
        localStorage.setItem("liste", JSON.stringify(listeItems));

    }
    if (!Number.isInteger(Number(firstWord))) {
        // <nom>
        // objectItem.nom = troisiemeMot.charAt(0).toUpperCase() + troisiemeMot.slice(1);
        console.log('un nom');
        console.log(firstWord);
        console.log(secondWord);
        if (secondWord === undefined) {
            secondWord = "";
            const objectItem = {
                nom: firstWord.charAt(0).toUpperCase() + firstWord.slice(1) + ' ' + secondWord,
                quantite: 1,
                unite: 'u.'
            }
            console.log(objectItem);
            listeItems.push(objectItem);
            console.log(listeItems);
            localStorage.setItem("liste", JSON.stringify(listeItems));

        } else {
            const objectItem = {
                nom: firstWord.charAt(0).toUpperCase() + firstWord.slice(1) + ' ' + secondWord + ' ' + thirdWord,
                quantite: 1,
                unite: 'u.'
            }
            console.log(objectItem);
            listeItems.push(objectItem);

            console.log(listeItems);
            localStorage.setItem("liste", JSON.stringify(listeItems));

        }

    }




    // console.log(extraireDonnees(nomItem));
    // Insertion intelligente
    // <nom>
    // <quantité> <nom>
    // <quantité> <unité> <nom>
    // Est-ce que le 1er mot est un nombre ?
    // Refactoring
    function extraireDonnees(nomItem) {
        console.log(nomItem);

        // Sauvegarde de données avc le local storage

        let mots = nomItem.split(' ');
        console.log(mots);
        let premierMot = mots[0];
        let deuxiemeMot = mots[1];
        // let troisiemeMot = mots[2] + ' '+mots[3];
        let troisiemeMot = mots.slice(2).join(' ');
        // console.log(troisiemeMot);
        const unites = ["u.", "g", "kg", "L"];
        // let quantite;
        // let unite;
        // console.log(nomItem);
        const objectItem = {
            nom: premierMot,
            quantite: DEFAUT_QUANTITE,
            unite: DEFAUT_UNITE
        }
        console.log(objectItem);

        if (Number.isInteger(Number(premierMot))) {
            console.log('si premier mot est un nbre');
            let elNom = elLi.querySelector('.nom');
            let elQuantite = elLi.querySelector('.quantite');
            let elUnite = elLi.querySelector('.unite');
            // console.log(elUnite);

            // Si c'est une quantité, il faut l'extraire
            // <quantité> <nom>
            // <quantité> <unité> <nom>
            objectItem.quantite = Number(premierMot);
            elQuantite.textContent = objectItem.quantite



            // Si le 2e mot est une unité, l'extraire
            // for (let unite of unites) {
            //     console.log(unite);
            //     if(deuxiemeMot === unite){
            //         console.log('equal unity');
            //         let unite = deuxiemeMot;
            //         console.log(unite);
            //     } else {
            //         console.log('else deuxieme mot');
            //         nomItem = deuxiemeMot;
            //     }

            // }

            // Autre méthode pour vérifier la valeur du deuxième mot
            if (unities.includes(deuxiemeMot)) {
                console.log(' deuxieme mot est une unité');
                objectItem.unite = deuxiemeMot;
                // console.log(objectItem.unite);
                elUnite.value = objectItem.unite;
                objectItem.nom = troisiemeMot.charAt(0).toUpperCase() + troisiemeMot.slice(1);
                // console.log(objectItem.nom);
                elNom.textContent = objectItem.nom;
                // console.log(elNom);

            }
            else if (Number.isInteger(Number(premierMot)) && !unites.includes(deuxiemeMot)) {
                console.log("premier est un nbre est deuxieme pas unite");
                const elNom = elLi.querySelector('.nom');
                const elQuantite = elLi.querySelector('.quantite');
                const elUnite = elLi.querySelector('.unite');
                console.log('premier mot est : ' + premierMot, 'deuxieme mot est : ' + deuxiemeMot);
                objectItem.nom = deuxiemeMot.charAt(0).toUpperCase() + deuxiemeMot.slice(1) + ' ' + troisiemeMot;
                objectItem.quantite = premierMot;
                objectItem.unite = DEFAUT_UNITE;
                elNom.textContent = objectItem.nom;
                elUnite.value = objectItem.unite;

            }
            // replaceFocus();


        }
        else {
            console.log('sinon si premier mot est une chaîne de caractère');

            // Mettre la 1ère lettre en majuscule
            // pommes => P + ommes
            nomItem = nomItem.charAt(0).toUpperCase() + nomItem.slice(1);
            // console.log(nomItem);



            // Injecter cette valeur dans l'élément <li>
            // Sélectionner l'élément nom <p>
            const elNom = elLi.querySelector('.nom');
            const elQuantite = elLi.querySelector('.quantite');
            const elUnite = elLi.querySelector('.unite');
            elNom.textContent = nomItem;
            // replaceFocus();

        }
        return objectItem;
    }



    // Sinon, c'est qque c'est juste un nom
    // <nom>





    // Ajouter l'élément <li> dans la liste <ul>
    elListe.append(elLi);


})


elNouvelItem.addEventListener('input', function (e) {
    // console.log('input');
    elNouvelItem.setCustomValidity('');
    elNouvelItem.checkValidity();
    const pError = document.querySelector('.msg-error');
    if (pError.classList.contains("msg-error")) {
        const elLiError = elTEmplateError.content.cloneNode(false);

    }


})

elNouvelItem.addEventListener('invalid', () => {
    const nom = elNouvelItem.value;
    const elLiError = elTEmplateError.content.cloneNode(true);
    const pError = elLiError.querySelector('.para-error');

    // 1 ere méthode
    if (nom.length === 0) {
        // console.log('empty string');
        elNouvelItem.setCustomValidity("Perdu ! Vous devez indiquer les informations de l'item, exemple : 250 g de chocolat! try again!")
        // Créer un élément <li> à partir du template
        const elLiError = elTEmplateError.content.cloneNode(true);
        const pError = elLiError.querySelector('.para-error');
        pError.textContent = "Perdu ! Vous devez indiquer les informations de l'item, exemple : 250 g de chocolat! try again!";
        setTimeout(() => {
            pError.textContent = "";
            pError.style.background = "transparent";
            pError.style.marginTop = "20px";
            msgError.classList.toggle('paraErrorNotDisplay')
            // pError.classlist.toggle('paraErrorNotDisplay')
        }, 2000)
        msgError.append(pError)

    }
    else if (!/[A-Za-z]{2}/.test(nom)) {
        // console.log('2 lettre mini');
        // Si nom ne contient pas 2 lettres côte à côte
        elNouvelItem.setCustomValidity("Le nom de l'item doit faire 2 lettres minimum");
        const elLiError = elTEmplateError.content.cloneNode(true);
        setTimeout(() => {
            const pError = elLiError.querySelector('.para-error');

        }, 2000)
        pError.textContent = "Perdu ! L'item doit contenir 2 caractères alphanmérique minimum ! try again!";
        setTimeout(() => {
            pError.textContent = "";
            pError.style.background = "transparent";
            pError.style.marginTop = "20px";
            msgError.classList.toggle('paraErrorNotDisplay')
            // pError.classlist.toggle('paraErrorNotDisplay')
        }, 4000)
        msgError.append(pError)


    } else {
        // console.log('bad string');
        elNouvelItem.setCustomValidity("Perdu ! Les caractères spéciaux, les accents et autres lettres spécifiques ne sont pas autorisés ! try again!")
        const elError = elTEmplateError.content.cloneNode(true);
        pError.textContent = "Perdu ! Les caractères spéciaux, les accents et autres lettres spécifiques ne sont pas autorisés ! try again!";
        msgError.append(pError)
    }

    // seconde méthode
    // if (elNouvelItem.value === "") {
    //     console.log('empty string');
    //     elNouvelItem.setCustomValidity("Vous devez indiquer les informations de l'item, exemple : 250 g chocolat! try again!")
    // } else {
    //     console.log('bad string');

    // }
})
function replaceFocus() {
    elForm.focus();
}
window.addEventListener("DOMContentLoaded", (event) => {
    // Au chargemetnde la page lancement de la fonctin ceateElementLi()
    // createElementLi();
    // Vider le champs nouvel item aprés avoir cliquez sur le botuon ajouter
    elNouvelItem.value = "";

    elForm.focus();
})
console.log('oki');
