import React from 'react';
import '../stylesheets/projectApplication.css';
import NavigationBar from './NavigationBar.js';
import {Form, Select, InputNumber, Icon, Checkbox,
Input, Tooltip, message, notification } from 'antd';
import 'antd/dist/antd.css';
import { MDBBtn} from "mdbreact";
import Footer from '../components/footer.jsx';
import { Link } from "react-router-dom";


const { Option } = Select;
const { TextArea } = Input;

class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
      formLayout: 'horizontal',
      rewardsLayout: 'inline',
      verticalLayout:'vertical',
      photoLeader: '',
      photoProject:'',
      acceptCGU: false
    };
    this.handleChangeLeaderPhoto = this.handleChangeLeaderPhoto.bind(this);
    this.handleChangeProjectPhoto = this.handleChangeProjectPhoto.bind(this);
    this.onChange= this.onChange.bind(this);
  }




  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }

      if (this.state.acceptCGU === true && values.projectLeaderName && values.projectLeaderSurname && values.projectLeaderEmail && values.projectLeaderPhone && values.projectLeaderAddress && values.projectLeaderPostalCode && values.projectLeaderCity && values.projectTitle &&  values.sector &&  values.projectShortDescription && values.projectGoal && values.projectStory && values.budgetGoal && values.projectAction && values.budgetAllocation && values.projectLeaderStory && values.projectLeaderAmbition && values.rewardsAmount1 && values.rewardsTitle1 && values.rewardsDescription1 && values.rewardsAmount2 && values.rewardsTitle2 && values.rewardsDescription2 && values.rewardsAmount3 && values.rewardsTitle3 && values.rewardsDescription3 && values.rewardsAmount4 && values.rewardsTitle4 && values.rewardsDescription4 && values.rewardsAmount5 && values.rewardsTitle5 && values.rewardsDescription5 )

      {
      fetch('https://beproudofyou-backend.herokuapp.com/addproject', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
         'Content-Type': 'application/json'
              },
       body: JSON.stringify(values)
      })

    return notification.success({
    duration: 30,
    message: "Votre projet est enregistré",
    description: "Votre projet nous a bien été soumis. Après consultation de notre équipe, nous vous informerons de la mise en ligne votre projet à la plateforme Be proud of You. Merci pour votre confiance.",
  });

} else {

  return notification.error({
  duration: 30,
  message: "Votre projet n'a pas pu être enregistré",
  description: "Votre projet n'a pas pu nous être soumis. Certaines informations manquent ou n'ont pas été correctement saisi. Veuillez les vérifier et valider une nouvelle fois le formulaire ",
});
}
  });
}


  handleChangeLeaderPhoto(e) {
    this.setState({photoLeader: e.target.value.replace(/\s|[()#!?'"$%&*+-.:;<>@_{}€]/g, "")});
  }

  handleChangeProjectPhoto(e) {
    this.setState({photoProject: e.target.value.replace(/\s|[()#!?'"$%&*+-.:;<>@_{}€]/g, "")});
  }

  normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }


  uploadWidgetLeader() {
        window.cloudinary.openUploadWidget({ cloud_name: 'ddjeialc9', public_id: this.state.photoLeader , upload_preset: 'project_leader', tags:['entrepreneurs'], sources: [ 'local']},
        function(error, result) {
            console.log(result);
            if (result =! error) {
              return message.success('Votre photo personnelle a bien été enregistrée')
        }
      },
              function(error, result) {
                  console.log(result);
              });
      }

  uploadWidgetProject() {
        window.cloudinary.openUploadWidget({ cloud_name: 'ddjeialc9', public_id: this.state.photoProject , upload_preset: 'project_title', tags:['project'], sources: [ 'local']},

        function(error, result) {
            console.log(result);
            if (result =! error) {
              return message.success('La photo de votre projet a bien été enregistrée')
        }
      },
              function(error, result) {
                  console.log(result);
              });
      }

   onChange(e) {
     this.setState({
       acceptCGU: e.target.checked
     })
  console.log(`checked = ${e.target.checked}`);
}

  render() {

    const { getFieldDecorator } = this.props.form;
    const { formLayout, rewardsLayout} = this.state;
    console.log('la photo du projet', this.state.photoProject)

    return (
      <div style={{fontFamily: 'Roboto'}}>
        <NavigationBar/>
        <div style={{ textAlign:"center"}}>
          <h2 style={{color:"#413c58"}} className="h1-responsive font-weight-bold my-5">
            Faites financer votre projet !
          </h2>

          <p className="dark-grey-text mx-auto mb-5 w-75 text-center">
            Grâce à ce questionnaire, vous pouvez soumettre votre projet et lancer votre campagne de financement participative. Chaque projet soumis est préalablement étudié par l'équipe de Be proud of You. Notre but est de
            financer des projets viables d'entrepreneurs digne de confiance afin de protéger les donateurs et maximiser les chances de réussite du projet.
          </p>


        </div>
        <div className="wrapForm">
          <Form layout={formLayout} onSubmit={this.handleSubmit}>
            <h1 className="content">Vos informations personnelles</h1>

            <Form layout={rewardsLayout}>
              <Form.Item {...rewardsLayout} label="Nom">
                {getFieldDecorator('projectLeaderName', {
                  rules: [{
                    required: true,
                    message: 'Veuillez renseigner votre nom',
                  }],
                })(
                  <Input onChange={this.handleChangeLeaderPhoto} value={this.state.photoLeader} style={{width:"35vh"}} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)'}}/>} placeholder="Votre nom" />
                )}
              </Form.Item>

              <Form.Item {...rewardsLayout} label="Prénom">
                {getFieldDecorator('projectLeaderSurname', {
                  rules: [{
                    required: true,
                    message: 'Veuillez renseigner votre prénom',
                  }],
                })(
                  <Input style={{width:"35vh"}}  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)'}}/>} placeholder="Votre prénom" />
                )}
              </Form.Item>
            </Form>

            <Form layout={rewardsLayout}>
              <Form.Item {...rewardsLayout} label="Email">
                {getFieldDecorator('projectLeaderEmail', {
                  rules: [{
                      required: true,
                      message: 'Veuillez renseigner votre email',
                  }],
                })(
                  <Input style={{width:"40vh"}}  prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)'}}/>} placeholder="Votre email" />
                )}
              </Form.Item>


              <Form.Item {...rewardsLayout} label="Téléphone">
                {getFieldDecorator('projectLeaderPhone', {
                  rules: [{
                    required: true,
                    message: 'Veuillez renseigner votre numéro de téléphone',
                  }],
                })(
                  <Input style={{width:"40vh"}}  prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)'}}/>} placeholder="Votre numéro de téléphone" />
                )}
              </Form.Item>
            </Form>

            <Form layout={rewardsLayout}>
              <Form.Item {...rewardsLayout} label="Adresse">
                {getFieldDecorator('projectLeaderAddress', {
                  rules: [{
                    required: true,
                    message: "Veuillez renseigner votre adresse d'habitation",
                  }],
                })(
                  <Input sm="6" style={{width:"50vh"}}  prefix={<Icon type="compass" style={{ color: 'rgba(0,0,0,.25)'}}/>} placeholder="Votre adresse d'habitation" />
                )}
              </Form.Item>
            </Form>

            <Form layout={rewardsLayout}>

              <Form.Item {...rewardsLayout} label="Code Postal">
                {getFieldDecorator('projectLeaderPostalCode', {
                  rules: [{
                    required: true,
                    message: 'Veuillez renseigner votre code postal',
                  }],
                })(
                  <Input style={{width:"25vh"}} prefix={<Icon type="compass" style={{ color: 'rgba(0,0,0,.25)'}}/>} placeholder="Votre code postal" />
                )}
              </Form.Item>

              <Form.Item {...rewardsLayout} label="Ville">
                {getFieldDecorator('projectLeaderCity', {
                  rules: [{
                    required: true,
                    message: "Veuillez renseigner votre ville",
                  }],
                })(
                  <Input style={{width:"45vh"}}  prefix={<Icon type="compass" style={{ color: 'rgba(0,0,0,.25)'}}/>} placeholder="Votre ville" />
                )}
              </Form.Item>
            </Form>

            <h1 className="content"> Votre projet</h1>

            <Form.Item {...formLayout} label="Titre du projet">
              {getFieldDecorator('projectTitle', {
                rules: [{
                    required: true,
                    message: "Veuillez renseigner le nom de votre projet",
                }],
              })(
                <Input onChange={this.handleChangeProjectPhoto} value={this.state.photoProject} prefix={<Icon type="read" style={{ color: 'rgba(0,0,0,.25)'}}/>}placeholder="Votre nom de projet / d'entreprise" />
              )}
            </Form.Item>

            <Form.Item
              label="Secteur d'activités"
              hasFeedback
              {...formLayout}
            >
              {getFieldDecorator('sector', {
                  rules: [
                { required: true, message: "Veuillez renseigner votre secteur d'activité" },
                  ],
              })(
                <Select placeholder="Votre secteur d'activité">
                  <Option value="Agriculture">Agriculture</Option>
                  <Option value="Chimie / Pharmacie">Chimie / Pharmacie</Option>
                  <Option value="Énergie">Énergie</Option>
                  <Option value="Maintenance / Entretien">Maintenance / Entretien</Option>
                  <Option value="Armée / Sécurité"> Armée / Sécurité</Option>
                  <Option value="Commerce / Distribution">Commerce / Distribution</Option>
                  <Option value="Enseignement">Enseignement</Option>
                  <Option value="Mécanique">Mécanique</Option>
                  <Option value="Art / Design">Art / Design</Option>
                  <Option value="Communication / Marketing / Pub">Communication / Marketing / Pub</Option>
                  <Option value="Environnement">Environnement</Option>
                  <Option value="Mode / Industrie textile">Mode / Industrie textile</Option>
                  <Option value="Audiovisuel / Spectacle">Audiovisuel / Spectacle</Option>
                  <Option value="Fonction publique">Fonction publique</Option>
                  <Option value="Recherche">Recherche</Option>
                  <Option value="Audit / Gestion">Audit / Gestion</Option>
                  <Option value="Culture / Artisanat d'art">Culture / Artisanat d'art</Option>
                  <Option value="Hôtellerie / Restauration">Hôtellerie / Restauration</Option>
                  <Option value="Santé">Santé</Option>
                  <Option value="Automobile">Automobile</Option>
                  <Option value="Droit & Justice">Droit & Justice</Option>
                  <Option value="Industrie alimentaire">Industrie alimentaire</Option>
                  <Option value="Social">Social</Option>
                  <Option value="Environnement">Environnement</Option>
                  <Option value="Banque / Assurance">Banque / Assurance</Option>
                  <Option value="Edition / Journalisme">Edition / Journalisme</Option>
                  <Option value="	Informatique et télécoms">Informatique et télécoms</Option>
                  <Option value="Sport / Tourisme">Sport /Tourisme</Option>
                  <Option value="Électronique">Électronique</Option>
                  <Option value="Logistique / Transport">Logistique / Transport</Option>
                  <Option value="Traduction / Interprétariat">Traduction / Interprétariat</Option>
                  <Option value="BTP / Architecture">BTP / Architecture</Option>
                  <Option value="Verre, béton & céramique">Verre, béton & céramique</Option>
                </Select>
              )}
            </Form.Item>


            <Form.Item {...formLayout} label="Description rapide">
              {getFieldDecorator('projectShortDescription', {
                rules: [{
                    required: true,
                    message: "Veuillez renseigner votre ville",
                }],
              })(
                <TextArea maxlength="500" placeholder="Une brève description de votre projet" autosize={{ minRows: 2, maxRows: 6 }} />
              )}
            </Form.Item>

            <Form.Item {...formLayout} label="But du projet">
              {getFieldDecorator('projectGoal', {
                rules: [{
                    required: true,
                    message: "Veuillez expliquer le but de votre projet",
                }],
              })(
                <TextArea  placeholder="Votre idée et votre concept détaillé" autosize={{ minRows: 4, maxRows: 10 }} />
              )}
            </Form.Item>

            <Form.Item {...formLayout} label="Histoire du projet">
              {getFieldDecorator('projectStory', {
                rules: [{
                    required: true,
                    message: "Veuillez expliquer l'histoire de votre projet ",
                }],
              })(
                <TextArea placeholder="Ce qui a été fait depuis la création du projet" autosize={{ minRows: 4, maxRows: 10 }} />
              )}
            </Form.Item>

            <h1 className="content"> Votre campagne de financement</h1>

            <Form.Item
              {...formLayout}
              label={(
                <span>Somme que vous souhaitez récolter &nbsp;
                  <Tooltip title="Définir un montant atteignable et en accord avec vos objectifs">
                    <Icon type="question-circle-o" />
                  </Tooltip>
                </span>

              )}>
              {getFieldDecorator('budgetGoal', {
                rules: [{
                    required: true,
                    message: "Veuillez renseigner le montant que vous souhaitez atteindre",

                }],
              })(
                <InputNumber style={{width:"25vh"}}min={1} defaultValue={3} />,
              )}
              <span style={{marginLeft:'5px'}}>Francs CFA</span>
            </Form.Item>

            <Form.Item {...formLayout} label="À quoi va servir le financement ?">
              {getFieldDecorator('projectAction', {
                rules: [{
                    required: true,
                    message: "Veuillez expliquer le but de cette demande de fonds",
                }],
              })(
                <TextArea  placeholder="Quels développements pourront-être effectués ?" autosize={{ minRows: 4, maxRows: 10 }} />
              )}
            </Form.Item>

            <Form.Item {...formLayout} label="Répartition de l'investissement">
              {getFieldDecorator('budgetAllocation', {
                rules: [{
                    required: true,
                    message: "Veuillez expliquer quelles sont les postes d'investissement de la somme",
                }],
              })(
                <TextArea  placeholder="Les postes d'investissement de la somme" autosize={{ minRows: 4, maxRows: 10 }} />
              )}
            </Form.Item>

            <h1 className="content"> Qui êtes-vous ?</h1>

            <Form.Item {...formLayout} label="L'histoire du/des fondateurs">
              {getFieldDecorator('projectLeaderStory', {
                rules: [{
                    required: true,
                    message: "Veuillez expliquer qui vous-êtes",
                }],
              })(
                <TextArea  placeholder="Votre histoire personnelle qui vous a mené à ce projet" autosize={{ minRows: 4, maxRows: 10 }} />
              )}
            </Form.Item>

            <Form.Item {...formLayout} label="Les ambitions futures">
              {getFieldDecorator('projectLeaderAmbition', {
                rules: [{
                    required: true,
                    message: "Veuillez expliquer vos ambitions futures ",
                }],
              })(
                <TextArea  placeholder="Les objectifs futurs que vous vous fixez" autosize={{ minRows: 4, maxRows: 10 }} />
              )}
            </Form.Item>

            <h1 className="content"> Réseaux sociaux</h1>

            <Form layout={rewardsLayout}>
              <Form.Item {...formLayout } label="Site Web">
                {getFieldDecorator('websiteLink', {
                  rules: [{
                      required: false,
                      message: "Veuillez renseigner le lien d'accès à votre site web",
                  }],
                })(
                  <Input style={{width:"35vh"}}  prefix={<Icon type="global" style={{ color: 'rgba(0,0,0,.25)'}}/>}placeholder="Lien vers votre site Web" />
                )}
              </Form.Item>

              <Form.Item {...formLayout } label="Facebook">
                {getFieldDecorator('facebookLink', {
                  rules: [{
                      required: false,
                      message: "Veuillez renseigner le lien d'accès à votre page Facebook",
                  }],
                })(
                  <Input style={{width:"35vh"}}  prefix={<Icon type="facebook" style={{ color: 'rgba(0,0,0,.25)'}}/>}placeholder="Lien vers votre page Facebook" />
                )}
              </Form.Item>

              <Form.Item {...formLayout } label="Instagram">
                {getFieldDecorator('instagramLink', {
                  rules: [{
                      required: false,
                      message: "Veuillez renseigner le lien d'accès à votre page Instagram",
                  }],
                })(
                  <Input  style={{width:"35vh"}}  prefix={<Icon type="instagram" style={{ color: 'rgba(0,0,0,.25)'}}/>}placeholder="Lien vers votre page Instagram" />
                )}
              </Form.Item>
            </Form>

            <h1 className="cloudinaryButton"> Photos de votre projet </h1>

            <div className="cloudinaryButton">
              <MDBBtn gradient="purple" onClick={this.uploadWidgetLeader.bind(this)} className="upload-button">
                Ajouter une image de vous
              </MDBBtn>
              <p>* Format photo carré requis</p>
            </div>

            <div className="cloudinaryButton">
              <MDBBtn gradient="purple" onClick={this.uploadWidgetProject.bind(this)} className="upload-button">
                Ajouter une image de votre projet
              </MDBBtn>
              <p>* Format photo 16/9 ou 4/3 requis</p>
            </div>


            <h1 className="content"> Les contreparties aux dons</h1>

            <h3 className="paliers">1er palier</h3>

            <Form layout={rewardsLayout}>
              <Form.Item
                label="Contrepartie pour les donateurs"
                {...rewardsLayout }
              >
                <span style={{marginRight:'5px'}}>Pour un don de plus de</span>
                {getFieldDecorator('rewardsAmount1', {
                  rules: [{
                      required: true,
                      message: "Veuillez assigner un montant demandé à la contrepartie",
                  }],
                })(
                  <InputNumber style={{width:"20vh"}} placeholder="Exemple : 50000" />
                )}
                <span style={{marginLeft:'5px'}}>Francs CFA,</span>
              </Form.Item>

              <Form.Item

                {...rewardsLayout }
              >
                <span style={{marginRight:'5px'}}>j'offre</span>
                {getFieldDecorator('rewardsTitle1', {
                  rules: [{
                      required: true,
                      message: "Veuillez renseigner ce qu'est votre contrepartie au don de ce montant",
                  }],
                })(
                  <Input maxlength="50" style={{width:"35vh"}} placeholder="Exemple: 2 T-Shirt personnalisés" />
                )}
              </Form.Item>

              <Form.Item
                label="Description de la contrepartie"
                {...rewardsLayout }
              >{getFieldDecorator('rewardsDescription1', {
                rules: [{
                    required: true,
                    message: "Veuillez décrire ce qu'est votre contrepartie",
                }],
              })(
                <Input maxlength="100" style={{width:"60vh"}} placeholder="Exemple: Les T-Shirts sont produits en coton véritable du Togo" />
              )}
              </Form.Item>
            </Form>

            <h3 className="paliers">2nd palier</h3>

            <Form layout={rewardsLayout}>
              <Form.Item
                label="Contrepartie pour les donateurs"
                {...rewardsLayout }
              >
                <span style={{marginRight:'5px'}}>Pour un don de plus de</span>
                {getFieldDecorator('rewardsAmount2', {
                  rules: [{
                      required: true,
                      message: "Veuillez assigner un montant demandé à la contrepartie",
                  }],
                })(
                  <InputNumber style={{width:"20vh"}} placeholder="Exemple : 50000" />
                )}
                <span style={{marginLeft:'5px'}}>Francs CFA,</span>
              </Form.Item>

              <Form.Item

                {...rewardsLayout }
              >
                <span style={{marginRight:'5px'}}>j'offre</span>
                {getFieldDecorator('rewardsTitle2', {
                  rules: [{
                      required: true,
                      message: "Veuillez renseigner ce qu'est votre contrepartie au don de ce montant",
                  }],
                })(
                  <Input maxlength="50" style={{width:"35vh"}} placeholder="Exemple: 2 T-Shirt personnalisés" />
                )}
              </Form.Item>

              <Form.Item
                label="Description de la contrepartie"
                {...rewardsLayout }
              >{getFieldDecorator('rewardsDescription2', {
                rules: [{
                    required: true,
                    message: "Veuillez décrire ce qu'est votre contrepartie",
                }],
              })(
                <Input maxlength="100" style={{width:"60vh"}} placeholder="Exemple: Les T-Shirts sont produits en coton véritable du Togo" />
              )}
              </Form.Item>

            </Form>

            <h3 className="paliers">3ème palier</h3>

            <Form layout={rewardsLayout}>
              <Form.Item
                label="Contrepartie pour les donateurs"
                {...rewardsLayout }
              >
                <span style={{marginRight:'5px'}}>Pour un don de plus de</span>
                {getFieldDecorator('rewardsAmount3', {
                  rules: [{
                      required: true,
                      message: "Veuillez assigner un montant demandé à la contrepartie",
                  }],
                })(
                  <InputNumber style={{width:"20vh"}} placeholder="Exemple : 50000" />
                )}
                <span style={{marginLeft:'5px'}}>Francs CFA,</span>
              </Form.Item>

              <Form.Item

                {...rewardsLayout }
              >
                <span style={{marginRight:'5px'}}>j'offre</span>
                {getFieldDecorator('rewardsTitle3', {
                  rules: [{
                      required: true,
                      message: "Veuillez renseigner ce qu'est votre contrepartie au don de ce montant",
                  }],
                })(
                  <Input maxlength="50" style={{width:"35vh"}} placeholder="Exemple: 2 T-Shirt personnalisés" />
                )}
              </Form.Item>

              <Form.Item
                label="Description de la contrepartie"
                {...rewardsLayout }
              >{getFieldDecorator('rewardsDescription3', {
                rules: [{
                    required: true,
                    message: "Veuillez décrire ce qu'est votre contrepartie",
                }],
              })(
                <Input maxlength="100" style={{width:"60vh"}} placeholder="Exemple: Les T-Shirts sont produits en coton véritable du Togo" />
              )}
              </Form.Item>

            </Form>

            <h3 className="paliers">4ème palier</h3>

            <Form layout={rewardsLayout}>
              <Form.Item
                label="Contrepartie pour les donateurs"
                {...rewardsLayout }
              >
                <span style={{marginRight:'5px'}}>Pour un don de plus de</span>
                {getFieldDecorator('rewardsAmount4', {
                  rules: [{
                      required: true,
                      message: "Veuillez assigner un montant demandé à la contrepartie",
                  }],
                })(
                  <InputNumber style={{width:"20vh"}} placeholder="Exemple : 50000" />
                )}
                <span style={{marginLeft:'5px'}}>Francs CFA,</span>
              </Form.Item>

              <Form.Item

                {...rewardsLayout }
              >
                <span style={{marginRight:'5px'}}>j'offre</span>
                {getFieldDecorator('rewardsTitle4', {
                  rules: [{
                      required: true,
                      message: "Veuillez renseigner ce qu'est votre contrepartie au don de ce montant",
                  }],
                })(
                  <Input maxlength="50" style={{width:"35vh"}} placeholder="Exemple: 2 T-Shirt personnalisés" />
                )}
              </Form.Item>

              <Form.Item
                label="Description de la contrepartie"
                {...rewardsLayout }
              >{getFieldDecorator('rewardsDescription4', {
                rules: [{
                    required: true,
                    message: "Veuillez décrire ce qu'est votre contrepartie",
                }],
              })(
                <Input maxlength="100" style={{width:"60vh"}} placeholder="Exemple: Les T-Shirts sont produits en coton véritable du Togo" />
              )}
              </Form.Item>

            </Form>

            <h3 className="paliers">5ème palier</h3>

            <Form layout={rewardsLayout}>
              <Form.Item
                label="Contrepartie pour les donateurs"
                {...rewardsLayout }
              >
                <span style={{marginRight:'5px'}}>Pour un don de plus de</span>
                {getFieldDecorator('rewardsAmount5', {
                  rules: [{
                      required: true,
                      message: "Veuillez assigner un montant demandé à la contrepartie",
                  }],
                })(
                  <InputNumber style={{width:"20vh"}} placeholder="Exemple : 50000" />
                )}
                <span style={{marginLeft:'5px'}}>Francs CFA,</span>
              </Form.Item>

              <Form.Item

                {...rewardsLayout }
              >
                <span style={{marginRight:'5px'}}>j'offre</span>
                {getFieldDecorator('rewardsTitle5', {
                  rules: [{
                      required: true,
                      message: "Veuillez renseigner ce qu'est votre contrepartie au don de ce montant",
                  }],
                })(
                  <Input maxlength="50" style={{width:"35vh"}} placeholder="Exemple: 2 T-Shirt personnalisés" />
                )}
              </Form.Item>

              <Form.Item
                label="Description de la contrepartie"
                {...rewardsLayout }
              >{getFieldDecorator('rewardsDescription5', {
                rules: [{
                    required: true,
                    message: "Veuillez décrire ce qu'est votre contrepartie",
                }],
              })(
                <Input maxlength="100" style={{width:"60vh"}} placeholder="Exemple: Les T-Shirts sont produits en coton véritable du Togo" />
              )}
              </Form.Item>

            </Form>

            <h3 className="paliers">6ème palier</h3>

            <Form layout={rewardsLayout}>
              <Form.Item
                label="Contrepartie pour les donateurs"
                {...rewardsLayout }
              >
                <span style={{marginRight:'5px'}}>Pour un don de plus de</span>
                {getFieldDecorator('rewardsAmount6', {

                })(
                  <InputNumber style={{width:"20vh"}} placeholder="Exemple : 50000" />
                )}
                <span style={{marginLeft:'5px'}}>Francs CFA,</span>
              </Form.Item>

              <Form.Item

                {...rewardsLayout }
              >
                <span style={{marginRight:'5px'}}>j'offre</span>
                {getFieldDecorator('rewardsTitle6', {

                })(
                  <Input maxlength="50" style={{width:"35vh"}} placeholder="Exemple: 2 T-Shirt personnalisés" />
                )}
              </Form.Item>

              <Form.Item
                label="Description de la contrepartie"
                {...rewardsLayout }
              >{getFieldDecorator('rewardsDescription6', {

              })(
                <Input maxlength="100" style={{width:"60vh"}} placeholder="Exemple: Les T-Shirts sont produits en coton véritable du Togo" />
              )}
              </Form.Item>

            </Form>

            <h3 className="paliers">7ème palier</h3>

            <Form layout={rewardsLayout}>
              <Form.Item
                label="Contrepartie pour les donateurs"
                {...rewardsLayout }
              >
                <span style={{marginRight:'5px'}}>Pour un don de plus de</span>
                {getFieldDecorator('rewardsAmount7', {

                })(
                  <InputNumber style={{width:"20vh"}} placeholder="Exemple : 50000" />
                )}
                <span style={{marginLeft:'5px'}}>Francs CFA,</span>
              </Form.Item>

              <Form.Item

                {...rewardsLayout }
              >
                <span style={{marginRight:'5px'}}>j'offre</span>
                {getFieldDecorator('rewardsTitle7', {

                })(
                  <Input maxlength="50" style={{width:"35vh"}} placeholder="Exemple: 2 T-Shirt personnalisés" />
                )}
              </Form.Item>

              <Form.Item
                label="Description de la contrepartie"
                {...rewardsLayout }
              >{getFieldDecorator('rewardsDescription7', {

              })(
                <Input maxlength="100" style={{width:"60vh"}} placeholder="Exemple: Les T-Shirts sont produits en coton véritable du Togo" />
              )}
              </Form.Item>

            </Form>

            <h3 className="paliers">8ème palier</h3>

            <Form layout={rewardsLayout}>
              <Form.Item
                label="Contrepartie pour les donateurs"
                {...rewardsLayout }
              >
                <span style={{marginRight:'5px'}}>Pour un don de plus de</span>
                {getFieldDecorator('rewardsAmount8', {

                })(
                  <InputNumber style={{width:"20vh"}} placeholder="Exemple : 50000" />
                )}
                <span style={{marginLeft:'5px'}}>Francs CFA,</span>
              </Form.Item>

              <Form.Item

                {...rewardsLayout }
              >
                <span style={{marginRight:'5px'}}>j'offre</span>
                {getFieldDecorator('rewardsTitle8', {

                })(
                  <Input maxlength="50" style={{width:"35vh"}} placeholder="Exemple: 2 T-Shirt personnalisés" />
                )}
              </Form.Item>

              <Form.Item
                label="Description de la contrepartie"
                {...rewardsLayout }
              >{getFieldDecorator('rewardsDescription8', {

              })(
                <Input maxlength="100" style={{width:"60vh"}} placeholder="Exemple: Les T-Shirts sont produits en coton véritable du Togo" />
              )}
              </Form.Item>

            </Form>

            <h3 className="paliers">9ème palier</h3>

            <Form layout={rewardsLayout}>
              <Form.Item
                label="Contrepartie pour les donateurs"
                {...rewardsLayout }
              >
                <span style={{marginRight:'5px'}}>Pour un don de plus de</span>
                {getFieldDecorator('rewardsAmount9', {

                })(
                  <InputNumber style={{width:"20vh"}} placeholder="Exemple : 50000" />
                )}
                <span style={{marginLeft:'5px'}}>Francs CFA,</span>
              </Form.Item>

              <Form.Item

                {...rewardsLayout }
              >
                <span style={{marginRight:'5px'}}>j'offre</span>
                {getFieldDecorator('rewardsTitle9', {

                })(
                  <Input maxlength="50" style={{width:"35vh"}} placeholder="Exemple: 2 T-Shirt personnalisés" />
                )}
              </Form.Item>

              <Form.Item
                label="Description de la contrepartie"
                {...rewardsLayout }
              >{getFieldDecorator('rewardsDescription9', {

              })(
                <Input maxlength="100" style={{width:"60vh"}} placeholder="Exemple: Les T-Shirts sont produits en coton véritable du Togo" />
              )}
              </Form.Item>

            </Form>

            <h3 className="paliers">10ème palier</h3>

            <Form layout={rewardsLayout}>
              <Form.Item
                label="Contrepartie pour les donateurs"
                {...rewardsLayout }
              >
                <span style={{marginRight:'5px'}}>Pour un don de plus de</span>
                {getFieldDecorator('rewardsAmount10', {

                })(
                  <InputNumber style={{width:"20vh"}} placeholder="Exemple : 50000" />
                )}
                <span style={{marginLeft:'5px'}}>Francs CFA,</span>
              </Form.Item>

              <Form.Item

                {...rewardsLayout }
              >
                <span style={{marginRight:'5px'}}>j'offre</span>
                {getFieldDecorator('rewardsTitle10', {

                })(
                  <Input maxlength="50" style={{width:"35vh"}} placeholder="Exemple: 2 T-Shirt personnalisés" />
                )}
              </Form.Item>

              <Form.Item
                label="Description de la contrepartie"
                {...rewardsLayout }
              >{getFieldDecorator('rewardsDescription10', {

              })(
                <Input maxlength="100" style={{width:"60vh"}} placeholder="Exemple: Les T-Shirts sont produits en coton véritable du Togo" />
              )}
              </Form.Item>

            </Form>

            <Form.Item>
              {getFieldDecorator('adminAgree', {
                  initialValue: false
              })}
            </Form.Item>

          </Form>
        </div>

        <Checkbox className="CGU" onChange={this.onChange}>Vous acceptez les <a target="_blank" href="https://www.docdroid.net/pVXdEKQ/contractbeproudofyou.pdf">CGU</a> de la plateforme Be proud of You décrivant les conditions précédent, durant et suite au début de votre campagne de financement</Checkbox>


        <Form style={{display:"flex", justifyContent:"center"}}>
          <Form.Item {...formLayout}>
            <MDBBtn  onClick={this.handleSubmit.bind(this)} class="btn btn-light-green waves-effect " htmlType="submit">Envoyer votre proposition de projet</MDBBtn>
          </Form.Item>
        </Form>



        <Footer/>
      </div>
      );
  }
}

const ProjectApplication = Form.create({ name: 'validate_other' })(Demo);

export default ProjectApplication;
