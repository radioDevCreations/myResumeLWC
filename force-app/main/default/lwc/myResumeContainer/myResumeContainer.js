import { LightningElement, track, api } from 'lwc';
import languageSettings from './config';
import { 
    PROFILE_IMAGE,
    SOCIAL_LINKS, 
    USER_DETAILS, 
    dataEN, 
    dataPL
} from './myResumeContainerData';


export default class MyResumeContainer extends LightningElement {
    language = languageSettings.name;
    data = languageSettings.data;
    
    @track SOCIAL_LINKS = SOCIAL_LINKS;
    @track USER_DETAILS = USER_DETAILS;
    @track PROFILE_IMAGE = PROFILE_IMAGE;
    @track CAREER_SUMMARY = this.data.CAREER_SUMMARY;
    @track EXPERIENCE_DATA = this.data.EXPERIENCE_DATA;
    @track EDUCATION_DATA = this.data.EDUCATION_DATA;
    @track SKILLS_AND_TOOLS_DATA = this.data.SKILLS_AND_TOOLS_DATA;
    @track LANGUAGES_DATA = this.data.LANGUAGES_DATA;
    @track INTERESTS_DATA = this.data.INTERESTS_DATA;

    translations = {
        languageLabel: {
            en: 'Language',
            pl: 'Język',
        },
        languageOptions: {
            en: [
                { label: 'English', value: 'en' },
                { label: 'Polish', value: 'pl' },
            ], 
            pl: [
                { label: 'Angielski', value: 'en' },
                { label: 'Polski', value: 'pl' },
            ],
        },
    };

    handleLanguageChange(event){
        this.language = event.detail.value;
        this.useData(this.language);
        this.setData();
    }

    useData(language){
        switch(language){
            case 'pl':
                this.data = dataPL;
                break;
            case 'en':
            default:
                this.data = dataEN;
                break;
        }
    }

    setData(){
        this.CAREER_SUMMARY = this.data.CAREER_SUMMARY;
        this.EXPERIENCE_DATA = this.data.EXPERIENCE_DATA;
        this.EDUCATION_DATA = this.data.EDUCATION_DATA;
        this.SKILLS_AND_TOOLS_DATA = this.data.SKILLS_AND_TOOLS_DATA;
        this.LANGUAGES_DATA = this.data.LANGUAGES_DATA;
        this.INTERESTS_DATA = this.data.INTERESTS_DATA;
    }

    get languageLabel() {
        return this.translate('languageLabel');
    }

    get languageOptions() {
        return this.translate('languageOptions');
    }

    translate(varName) {
        return this.translations[varName][this.language];
    }
}