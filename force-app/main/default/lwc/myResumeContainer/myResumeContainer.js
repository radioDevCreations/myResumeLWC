import { LightningElement, track } from 'lwc';
import { SOCIAL_LINKS, USER_DETAILS, PROFILE_IMAGE, CAREER_SUMMARY, EXPERIENCE_DATA, EDUCATION_DATA } from './myResumeContainerData';


export default class MyResumeContainer extends LightningElement {
    @track SOCIAL_LINKS = SOCIAL_LINKS;
    @track USER_DETAILS = USER_DETAILS;
    @track PROFILE_IMAGE = PROFILE_IMAGE;
    @track CAREER_SUMMARY = CAREER_SUMMARY;
    @track EXPERIENCE_DATA = EXPERIENCE_DATA;
    @track EDUCATION_DATA = EDUCATION_DATA;
}