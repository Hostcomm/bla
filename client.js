var client;

function initializeClient() {
    detectWebRTC();
    try {
        client = new clientClass();
    }catch(error){
        errorLogging.recordError({code: 1, error: error});
    }
}

function detectWebRTC() {
    DetectRTC.load(function() {
            DetectRTC.hasWebcam; // (has webcam device!)
            DetectRTC.hasMicrophone; // (has microphone device!)
            DetectRTC.hasSpeakers; // (has speakers!)
            DetectRTC.isScreenCapturingSupported;
            DetectRTC.isSctpDataChannelsSupported;
            DetectRTC.isRtpDataChannelsSupported;
            DetectRTC.isAudioContextSupported;
            DetectRTC.isWebRTCSupported;
            DetectRTC.isDesktopCapturingSupported;
            DetectRTC.isMobileDevice;

            DetectRTC.isWebSocketsSupported;
            DetectRTC.isWebSocketsBlocked;
            //DetectRTC.checkWebSocketsSupport(callback);

            DetectRTC.isWebsiteHasWebcamPermissions;        // getUserMedia allowed for HTTPs domain in Chrome?
            DetectRTC.isWebsiteHasMicrophonePermissions;    // getUserMedia allowed for HTTPs domain in Chrome?

            DetectRTC.audioInputDevices;    // microphones
            DetectRTC.audioOutputDevices;   // speakers
            DetectRTC.videoInputDevices;    // cameras

            DetectRTC.osName;
            DetectRTC.osVersion;

            DetectRTC.browser.name === 'Edge' || 'Chrome' || 'Firefox';
            DetectRTC.browser.version;
            DetectRTC.browser.isChrome;
            DetectRTC.browser.isFirefox;
            DetectRTC.browser.isOpera;
            DetectRTC.browser.isIE;
            DetectRTC.browser.isSafari;
            DetectRTC.browser.isEdge;

            DetectRTC.browser.isPrivateBrowsing; // incognito or private modes

            DetectRTC.isCanvasSupportsStreamCapturing;
            DetectRTC.isVideoSupportsStreamCapturing;

            //DetectRTC.DetectLocalIPAddress(callback);
        })
}

class clientClass{
    constructor(){
        const that = this;
    }

    //SETTERS
    set informClient(message){
        message == null ? this.informClientObj = Array() : this.informClientObj.push(message);
    }

    set departament(departament){
        this.departamentObj = departament;
    }

    set services(service){
        this.servicesObj ? null : this.servicesObj = {};
        this.servicesObj[service.key] = service.enable;
    }

    set videoRoom(videoRoom){
        this.videoRoomObj = videoRoom;
    }

    set clientIdentity(identity){
        this.clientIdentityObj = identity;
    }

    set currentService(currentService){
        this.currentServiceObj = currentService;
    }

    //GETTERS
    get informClient(){
        return this.informClientObj;
    }

    get departament(){
        return this.departamentObj;
    }

    get services(){
        if(this.servicesObj){
            for(let key in this.servicesObj){
                this.enabledServices(key, null, this.servicesObj[key])
            }
        }else{
            return true;
        }
    }

    get videoRoom(){
        return this.videoRoomObj;
    }

    get clientIdentity(){
        return this.clientIdentityObj;
    }

    get currentService(){
        return this.currentServiceObj;
    }

    //FUNCTIONS

    detectWebRTC(){

        this.services = {key: 'video', enable: true};
        this.services = {key: 'voice', enable: true};

        this.informClient = null;
        if(DetectRTC){
            if(DetectRTC.isWebRTCSupported){
                if(!DetectRTC.isWebsiteHasMicrophonePermissions){
                    this.informClient = 'You will need to grant permission to your microphone.';
                }
                if (!DetectRTC.isWebsiteHasWebcamPermissions){
                    if(client.currentServiceObj === 'video'){
                        this.informClient = 'You will need to grant permission to your camera.';
                    }
                }
                if (!DetectRTC.hasMicrophone){
                    this.informClient = 'You do not have an audio input device. Please connect a microphone and click retry.';
                    this.services = {key: 'video', enable: false};
                    this.services = {key: 'voice', enable: false};
                }
                if (!DetectRTC.hasSpeakers){
                    this.informClient = 'You do not have an audio output device. Please connect an audio output device and click retry.';
                    this.services = {key: 'video', enable: false};
                    this.services = {key: 'voice', enable: false};
                }
                if (!DetectRTC.hasWebcam){
                    if (client.currentServiceObj === 'video'){
                        this.informClient = 'You do not have a video input device. Unless you connect a video camera, you won\'t be able to provide a video feed.';
                    }
                }


            }else{
                this.services = {key: 'video', enable: false};
                this.services = {key: 'voice', enable: false};
            }
        }
        else{
            this.informClient = 'WebRTC detection couldn\'t be made. Communications might not work.';
        }
    }

    checkMediaDevices(){
        detectWebRTC();
        this.detectWebRTC();
        this.toggleElements('.webrtcIssuesDivMessages', 'text', '');
        this.informClientObj[0] ? client.toggleElements('.webrtcIssuesDiv', 'visible') : client.toggleElements('.webrtcIssuesDiv', 'hidden') ;
        this.informClientObj.forEach((message) => {
            client.toggleElements('.webrtcIssuesDivMessages', 'text', $('.webrtcIssuesDivMessages').text() + message + '\n');
        });
    }

    checkTime(){ //CHECKS IF WORKING HOURS TO ENABLE OR NOT THE CONTACT SERVICES
        let now = new Date();
        if(now.getDay() == 6 || now.getDay() == 0){
            return false;
        }else {
            if((now.getHours() >= 9 && now.getHours() < 17) || (now.getHours() == 17 && now.getMinutes() <= 30)){
                return true;
            }else{
                return false;
            }
        }
    }

    enabledServices(service = null, departament = null, enabled = null){//ENABLES OR DISABLES SERVICES IF WEBRTC IS PRESENT OR NOT TODO KEEP WORKING ON IT, ADD TO CHECK FOR CHOSEN DEPARTAMENTS && checktime()
        if(this.checkTime()){
            switch(service){
                case 'chat':
                    //enabled ? this.toggleElements('.chatChannelButton', 'enable') : this.toggleElements('.chatChannelButton', 'disable');
                    break;
                case 'video':
                    //enabled ? this.toggleElements('.videoChannelButton', 'enable') : this.toggleElements('.videoChannelButton', 'disable');
                    break;
                case 'voice':
                    //enabled ? this.toggleElements('.voiceChannelButton', 'enable') : this.toggleElements('.voiceChannelButton', 'disable');
                    break;
                case 'all':
                    break;
                default:
                    break;
            }

            switch (departament){
                case 'accounts':
                    this.toggleElements('.videoChannelButton', 'hidden');
                    break;
                case 'sales':

                    break;
                case 'support':
                    this.toggleElements('.videoChannelButton', 'hidden');
                    this.toggleElements('.chatChannelButton', 'hidden');
                    break;
                default:
                    break;
            }
        }else{
            this.toggleElements('.departamentsButton', 'disable');
            this.toggleElements('.communicationChannelsButton', 'disable');
        }

    }

    manageDepartaments(departament){
        this.departament = departament;
        //this.detectWebRTC();

        this.enabledServices(null, this.departament, null);
        //this.servicesC;

        this.toggleElements('.communicationChannelsModalBody', 'visible');
        this.toggleElements('.departamentsModalBody', 'hidden');
        this.toggleElements('.contactModalLogo', 'hidden');
        this.toggleElements('.contactsModalTitleMain', 'text', this.departamentObj.charAt(0).toUpperCase() + this.departamentObj.slice(1) + ' Department');
        this.toggleElements('.contactsModalTitleSecondary', 'text', 'Choose your contact option.\n');

/*        switch (this.departament){
            case 'accounts':
                this.toggleElements('.contactsModalTitle', 'text', 'Choose your contact option.\n');
                break;
            case 'sales':
                this.toggleElements('.contactsModalTitle', 'text', 'You chose Sales department. Choose how you would like to make contact.\n');
                break;
            case 'support':
                this.toggleElements('.contactsModalTitle', 'text', 'You chose Support department. Choose how you would like to make contact.\n');
                break;
            default:
                break;
        }*/
    }

    manageServices(service){
        this.toggleElements('.communicationChannelsModalBody', 'hidden');
        this.toggleElements('.contactsModalTitleMain', 'text', this.departamentObj.charAt(0).toUpperCase() + this.departamentObj.slice(1) + ' Team');
        switch (service){
            case 'chat':
                this.toggleElements('.contactsModalTitleSecondary', 'text', 'Chat with our ' + this.departamentObj + ' team.\n');
                initiateTokenManager('chat');
                break;
            case 'video':
                this.toggleElements('.contactsModalTitleSecondary', 'text', 'Video call our ' + this.departamentObj + ' team.\n');
                initiateTokenManager('video');
                break;
            case 'voice':
                this.toggleElements('.contactsModalTitleSecondary', 'text', 'Voice call our ' + this.departamentObj + ' team.\n');
                initiateTokenManager('voice');
                break;
            default:
                break;
        }
    }

    toggleElements(element, state, text = null){
        switch (state){
            case 'enable':
                $(element).prop('disabled', false);
                break;
            case 'disable':
                $(element).prop('disabled', true);
                break;
            case 'visible':
                $(element).show();
                break;
            case 'hidden':
                $(element).hide();
                break;
            case 'checked':
                $(element).prop('checked', true);
                break;
            case 'unchecked':
                $(element).prop('checked', false);
                break;
            case 'text':
                $(element).empty().text(text);
                break;
            case 'purge':
                while($(element).firstChild){ $(element).removeChild($(element).firstChild); }
                break;
            case 'append':
                $(element).appendTo('.chatUl');
                break;
            case 'prepend':
                $(element).prependTo('.chatUl');
                break;
            case 'fillInput':
                $(element).val(text);
                break;
            default:
                break;

        }
    }

}