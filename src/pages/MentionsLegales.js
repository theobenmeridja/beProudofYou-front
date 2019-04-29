import React, { Component } from 'react';
import '../stylesheets/about.css';
import NavigationBar from './NavigationBar.js';
import Footer from '../components/footer.jsx';
import '../stylesheets/mentionslegales.css';

class MentionsLegales extends Component {

  render() {


    return (
      <div style={{fontFamily: 'Roboto'}}>
        <div>
          <NavigationBar/>
        </div>

        <div style={{marginTop: "110px"}}className="mentionsContent">

          <h1 style={{textAlign:"center"}}>Informations légales</h1>
          <h3 className="title">1. Présentation du site.</h3>
          <p>En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site <a href="http://www.beproudofyou.org/">www.beproudofyou.org</a> l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :</p>
          <p><strong>Propriétaire</strong> : Voisins Solidaires Togo – Association – Lomé -Adidogomé, boulevard du 30 Août, non loin du lycée Adidogomé 2.  BP 12515 Lomé – TOGO<br />
            <strong>Créateur</strong>  : Théo Benmeridja<br />
            <strong>Responsable publication</strong> : Voisins Solidaires Togo – beproudofyoutogo@gmail.com<br />
            Le responsable publication est une personne physique ou une personne morale.<br />
            <strong>Webmaster</strong> : Voisins Solidaires Togo – beproudofyoutogo@gmail.com<br />
            <strong>Hébergeur</strong> : Heroku App – The Landmark @ One Market, Suite 300, San Francisco, California 94105<br />
            Crédits : Voisins Solidaires Togo<br />
          </p>

          <h3 className="title">2. Conditions générales d’utilisation du site et des services proposés.</h3>
          <p>L’utilisation du site <a href="http://www.beproudofyou.org/">www.beproudofyou.org</a> implique l’acceptation pleine et entière des conditions générales d’utilisation ci-après décrites. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment, les utilisateurs du site <a href="http://www.beproudofyou.org/">www.beproudofyou.org</a> sont donc invités à les consulter de manière régulière.</p>
          <p>Ce site est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut être toutefois décidée par Voisins Solidaires Togo, qui s’efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l’intervention.</p>
          <p>Le site <a href="http://www.beproudofyou.org/">www.beproudofyou.org</a> est mis à jour régulièrement par Voisins Solidaires Togo. De la même façon, les mentions légales peuvent être modifiées à tout moment : elles s’imposent néanmoins à l’utilisateur qui est invité à s’y référer le plus souvent possible afin d’en prendre connaissance.</p>


          <h3 className="title">3. Description des services fournis.</h3>
          <p>Le site <a href="http://www.beproudofyou.org/">www.beproudofyou.org</a> a pour objet de mettre en relation entrepreneurs Togolais et donateurs dans le cadre de campagne de financement participatif</p>
          <p>Voisins Solidaires Togo s’efforce de fournir sur le site <a href="http://www.beproudofyou.org/">www.beproudofyou.org</a> des informations aussi précises que possible. Toutefois, il ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.</p>
          <p>Tous les informations indiquées sur le site <a href="http://www.beproudofyou.org/">www.beproudofyou.org</a> sont données à titre indicatif, et sont susceptibles d’évoluer. Par ailleurs, les renseignements figurant sur le site <a href="http://www.beproudofyou.org/">www.beproudofyou.org</a> ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne.</p>


          <h3 className="title">4. Limitations contractuelles sur les données techniques.</h3>
          <p>Le site utilise la technologie JavaScript.</p>
          <p>Le site Internet ne pourra être tenu responsable de dommages matériels liés à l’utilisation du site. De plus, l’utilisateur du site s’engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis-à-jour</p>



          <h3 className="title">5. Propriété intellectuelle et contrefaçons.</h3>
          <p>Voisins Solidaires Togo est propriétaire des droits de propriété intellectuelle ou détient les droits d’usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons, logiciels.</p>
          <p>Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de : Voisins Solidaires Togo.</p>
          <p>Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.</p>



          <h3 className="title">6. Limitations de responsabilité.</h3>
          <p>Voisins Solidaires Togo ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site www.beproudofyou.org, et résultant soit de l’utilisation d’un matériel ne répondant pas aux spécifications indiquées au point 4, soit de l’apparition d’un bug ou d’une incompatibilité.</p>
          <p>Voisins Solidaires Togo ne pourra également être tenue responsable des dommages indirects (tels par exemple qu’une perte de marché ou perte d’une chance) consécutifs à l’utilisation du site <a href="http://www.beproudofyou.org/">www.beproudofyou.org</a>.</p>
          <p>Des espaces interactifs (possibilité de poser des questions dans l’espace contact) sont à la disposition des utilisateurs. Voisins Solidaires Togo se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable au Togo. Le cas échéant, Voisins Solidaires Togo se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l’utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie…).</p>



          <h3 className="title">7. Gestion des données personnelles.</h3>
          <p>A l'occasion de l'utilisation du site <a href="http://www.beproudofyou.org/">www.beproudofyou.org</a>, peuvent êtres recueillies : l'URL des liens par l'intermédiaire desquels l'utilisateur a accédé au site <a href="http://www.beproudofyou.org/">www.beproudofyou.org</a>, le fournisseur d'accès de l'utilisateur, l'adresse de protocole Internet (IP) de l'utilisateur.</p>
          <p> En tout état de cause Voisins Solidaires Togo ne collecte des informations personnelles relatives à l'utilisateur que pour le besoin de certains services proposés par le site <a href="http://www.beproudofyou.org/">www.beproudofyou.org</a>. L'utilisateur fournit ces informations en toute connaissance de cause, notamment lorsqu'il procède par lui-même à leur saisie. Il est alors précisé à l'utilisateur du site <a href="http://www.beproudofyou.org/">www.beproudofyou.org</a> l’obligation ou non de fournir ces informations.</p>
          <p>Aucune information personnelle de l'utilisateur du site <a href="http://www.beproudofyou.org/">www.beproudofyou.org</a> n'est publiée à l'insu de l'utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers.</p>
          <p>Les bases de données sont protégées par les dispositions de la loi du 1er juillet 1998 transposant la directive 96/9 du 11 mars 1996 relative à la protection juridique des bases de données.</p>


          <h3 className="title">8. Liens hypertextes et cookies.</h3>
          <p>Le site <a href="http://www.beproudofyou.org/">www.beproudofyou.org</a> contient un certain nombre de liens hypertextes vers d’autres sites, mis en place avec l’autorisation de Voisins Solidaires Togo. Cependant, Voisins Solidaires Togo n’a pas la possibilité de vérifier le contenu des sites ainsi visités, et n’assumera en conséquence aucune responsabilité de ce fait.</p>
          <p>La navigation sur le site <a href="http://www.beproudofyou.org/">www.beproudofyou.org</a> est susceptible de provoquer l’installation de cookie(s) sur l’ordinateur de l’utilisateur. Un cookie est un fichier de petite taille, qui ne permet pas l’identification de l’utilisateur, mais qui enregistre des informations relatives à la navigation d’un ordinateur sur un site. Les données ainsi obtenues visent à faciliter la navigation ultérieure sur le site, et ont également vocation à permettre diverses mesures de fréquentation.</p>
          <p>Le refus d’installation d’un cookie peut entraîner l’impossibilité d’accéder à certains services. L’utilisateur peut toutefois configurer son ordinateur de la manière suivante, pour refuser l’installation des cookies :</p>
          <p>Sous Internet Explorer : onglet outil (pictogramme en forme de rouage en haut a droite) / options internet. Cliquez sur Confidentialité et choisissez Bloquer tous les cookies. Validez sur Ok.</p>
          <p>Sous Firefox : en haut de la fenêtre du navigateur, cliquez sur le bouton Firefox, puis aller dans l'onglet Options. Cliquer sur l'onglet Vie privée.
          Paramétrez les Règles de conservation sur :  utiliser les paramètres personnalisés pour l'historique. Enfin décochez-la pour  désactiver les cookies.</p>
          <p>Sous Safari : Cliquez en haut à droite du navigateur sur le pictogramme de menu (symbolisé par un rouage). Sélectionnez Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la section "Confidentialité", cliquez sur Paramètres de contenu. Dans la section "Cookies", vous pouvez bloquer les cookies.</p>
          <p>Sous Chrome : Cliquez en haut à droite du navigateur sur le pictogramme de menu (symbolisé par trois lignes horizontales). Sélectionnez Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la section "Confidentialité", cliquez sur préférences.  Dans l'onglet "Confidentialité", vous pouvez bloquer les cookies.</p>

          <h3 className="title">9. Droit applicable et attribution de juridiction.</h3>
          <p>Tout litige en relation avec l’utilisation du site <a href="http://www.beproudofyou.org/">www.beproudofyou.org</a> est soumis au droit togolais.</p>

          <h3 className="title">10. Lexique.</h3>
            <p>Utilisateur : Internaute se connectant, utilisant le site susnommé.</p>
            <p>Informations personnelles : « les informations qui permettent, sous quelque forme que ce soit, directement ou non, l'identification des personnes physiques auxquelles elles s'appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978).</p>
          </div>

          <Footer/>
      </div>

    )
  }
}


export default MentionsLegales
