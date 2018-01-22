var htmlcode = '
<div class="modal-content">

    <div class="modal-header">
        <img src="https://hostcomm-testing.azurewebsites.net/public/hostcommClient/Communify_Logo.svg" alt="communifyLogo" class="modal-title contactModalLogo">
        <h2 class="modal-title contactsModalTitleMain"></h2>
        <h4 class="modal-title contactsModalTitleSecondary" id="contactsModalTitle">
            Choose Department
        </h4>
        <hr />
    </div>

    <div class="modal-body webrtcIssuesDiv" style="display: none">
        <h5 class="webrtcIssuesDivMessages"></h5>
        <button type="button" class="btn btn-default webrtcIssuesDivButtonRetry" id="webrtcIssuesButtonRetry">Retry</button>
        <button type="button" class="btn btn-default webrtcIssuesDivButtonHide" id="webrtcIssuesButtonHide">Hide</button>
    </div>

    <div class="modal-body departamentsModalBody" id="departamentsModalBody">
        <div>
            <div></div>
            <div class="row">
                <button type="button" class="btn btn-primary btn-lg btn-webrtc-departaments departamentsButton" id="salesDepartamentModalButton" data-departament="sales">
                    Sales
                </button>
            </div>
            <div class="row">
                <button type="button" class="btn btn-primary btn-lg btn-webrtc-departaments departamentsButton" id="supportDepartamentModalButton" data-departament="support">
                    Support
                </button>
            </div>
            <div class="row">
                <button type="button" class="btn btn-primary btn-lg btn-webrtc-departaments departamentsButton" id="accountsDepartamentModalButton" data-departament="accounts">
                    Accounts
                </button>
            </div>
            <div></div>
        </div>
    </div>

    <div class="modal-body communicationChannelsModalBody" id="communicationChannelsModalBody" style="display:none">
        <div>
            <div></div>
            <div class="row">
                <button type="button" class="btn btn-primary btn-lg btn-webrtc-commsChannels communicationChannelsButton videoChannelButton" id="audioChannelModalButton" data-service="video">
                    Video
                </button>
            </div>
            <div class="row">
                <button type="button" class="btn btn-primary btn-lg btn-webrtc-commsChannels communicationChannelsButton chatChannelButton" id="chatChannelModalButton" data-service="chat">
                    Chat
                </button>
            </div>
            <div class="row">
                <button type="button" class="btn btn-primary btn-lg btn-webrtc-commsChannels communicationChannelsButton voiceChannelButton" id="voiceChannelModalButton" data-service="voice">
                    Voice
                </button>
            </div>
            <div></div>
        </div>
    </div>

    <div class="modal-body videoChannelModalBody" id="audioChannelModalBody" style="display:none">

        <div class="videoIdentityDiv">
            <form class="form-horizontal videoIdentityDivForm" id="audioIdentityForm">
                <div class="form-group">
                    <label for="audioIdentityInput" class="col-sm-2 control-label videoIdentityDivFormInputLabel">Name</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control videoIdentityDivFormInput" id="audioIdentityInput" placeholder="Name">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                        <button type="button" class="btn btn-default videoIdentityDivFormSubmitButton" id="audioIdentitySubmit">Submit</button>
                    </div>
                </div>
            </form>
        </div>

        <div class="videoSuccessDiv" style="display: none">
            <div class="videoSuccessDivConnectDiv" style="display: inline-block">
                <button type="button" class="btn btn-default videoConnectButton" id="audioConnectButton">Connect</button>
            </div>

            <div class="btn-group videoSuccessDivEnableVideoDiv" id="audioEnableVideoDiv" style="display: inline-block">
                <p>
                    <input class="videoEnableVideoLabelCheckbox" type="checkbox" autocomplete="off" id="videoEnableVideoCheckbox">
                    <label class="videoEnableVideoLabel" for="videoEnableVideoCheckbox">Enable video feed</label>
                </p>
            </div>
        </div>

        <div class="tracksDiv">
            <div id="localTracksPlaceholder">
                <div class="localAudioTrackPlaceholder"></div>
                <div class="localVideoTrackPlaceholder"></div>
            </div>
            <div id="tracksPlaceholder">
                <div class="audioTrackPlaceholder"></div>
                <div class="videoTrackPlaceholder"></div>
            </div>
        </div>

        <div class="videoQuitDiv" style="display: none">
            <button type="button" class="btn btn-default videoFinishButton" id="audioFinishButton">Quit session</button>
        </div>

    </div>

                <div class="modal-body chatChannelModalBody" id="chatChannelModalBody" style="display:none">
                <div class="chatIdentityDiv">
                    <form class="form-horizontal chatIdentityForm">
                        <div class="form-group">
                            <label for="chatIdentityEmailInput" class="col-sm-2 control-label">Email address</label>
                            <div class="col-sm-10">
                                <input type="email" class="form-control chatIdentityEmailInput" id="chatIdentityEmailInput" placeholder="Email">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="chatIdentityNameInput" class="col-sm-2 control-label">Name</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control chatIdentityNameInput" id="chatIdentityNameInput" placeholder="Name">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="chatIdentityDescriptionInput" class="col-sm-2 control-label">Brief description</label>
                            <div class="col-sm-10">
                                <textarea class="form-control chatIdentityDescriptionInput" rows="3" placeholder="Write a brief description" id="chatIdentityDescriptionInput"></textarea>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-offset-2 col-sm-10">
                                <button type="button" class="btn btn-default chatIdentitySubmit" id="chatIdentitySubmit">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="chatContainer" style="display: none">
                    <div class="row">
                        <div class="col-md-5">
                            <div class="chatPanel panel panel-primary">
                                <div class="chatPanelBody panel-body">
                                    <ul class="chatUl">
                                        <!--<li class="left clearfix chatUlLi agentRow">
                                            <div class="chat-body clearfix">
                                                <div class="header">
                                                    <strong class="primary-font agentName">Jack Sparrow</strong>
                                                </div>
                                                <div>
                                                    <p class="agentMessage">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="right clearfix clientRow">
                                            <div class="chat-body clearfix">
                                                <div class="header">
                                                    <strong class="pull-right primary-font clientName">Bhaumik Patel</strong>
                                                </div>
                                                <br>
                                                <div>
                                                    <p class="clientMessage">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>-->
                                    </ul>
                                </div>
                                <div class="panel-footer">
                                    <div class="input-group">
                                        <input type="text" class="form-control input-sm chatMessage" placeholder="Type your message here..." />
                                        <span class="input-group-btn">
                                            <button class="btn btn-warning btn-sm submitMessage">Send</button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="endChatDiv" style="display: none">
                    <button class="btn btn-warning btn-sm endChat">End Chat</button>
                </div>
                <div class="chatTranscript" style="display: none">
                    <div class="input-group">
                        <input id="btn-input" type="text" class="form-control input-sm emailTranscript" placeholder="Type your email here..." />
                        <span class="input-group-btn">
                            <button class="btn btn-warning btn-sm submitEmail">Submit</button>
                        </span>
                    </div>
                </div>
            </div>


    <div class="modal-body voiceChannelModalBody" id="voiceChannelModalBody" style="display:none">

        <div class="voiceSuccessDiv" style="display:none">
            <button type="button" class="btn btn-default voiceCallButton" id="voiceCallButton">Call now</button>
        </div>

        <div class="voiceCallActions" style="display: none">
            <div class="voiceMuteDiv"  style="display:inline-block">
                <div class="btn-group" data-toggle="buttons">
                    <p>
                        <input type="checkbox" class="voiceMuteLabelTextbox" autocomplete="off" id="voiceMuteButton"/>
                        <label for="voiceMuteButton">Mute</label>
                    </p>
                </div>
            </div>

            <div class="voiceQuitDiv"  style="display:inline-block">
                <button type="button" class="btn btn-default voiceQuitButton" id="voiceFinishButton">End Call</button>
            </div>
        </div>

        <div class="voiceFeedbackDiv" id="voiceFeedbackDiv" style="display: none;">

            <div class="voiceFeedbackDivRateCallYesNo" id="rateCallYesNo">
                <h5 class="modal-title">Would you wish to rate our voice service?</h5>
                <br>
                <button type="button" class="btn btn-primary voiceFeedbackRateCall" data-rate="true" id="rateCallYes">Yes</button>
                <button type="button" class="btn btn-default voiceFeedbackRateCall" data-rate="" id="rateCallNo">No</button>
            </div>

            <div class="voiceFeedbackDivRateCall" style="display: none;">
                <div class="">
                    <h5 class="modal-title">Please score the quality of your call out of 5 and select any additional comments underneath if applicable.</h5>
                </div>

                <div class="voiceFeedbackDivRateCallScores">
                    <form>
                        <p>
                            <input type="radio" name="inlineRadioOptions" class="voiceFeedbackRadioScore" id="voiceFeedbackRadioRating1" value="1">
                            <label class="radio-inline" for="voiceFeedbackRadioRating1">
                                1
                            </label>
                        </p>
                        <p>
                            <input type="radio" name="inlineRadioOptions" class="voiceFeedbackRadioScore" id="voiceFeedbackRadioRating2" value="2">
                            <label class="radio-inline" for="voiceFeedbackRadioRating2">
                                2
                            </label>
                        </p>
                        <p>
                            <input type="radio" name="inlineRadioOptions" class="voiceFeedbackRadioScore" id="voiceFeedbackRadioRating3" value="3">
                            <label class="radio-inline" for="voiceFeedbackRadioRating3">
                                3
                            </label>
                        </p>
                        <p>
                            <input type="radio" name="inlineRadioOptions" class="voiceFeedbackRadioScore" id="voiceFeedbackRadioRating4" value="4">
                            <label class="radio-inline" for="voiceFeedbackRadioRating4">
                                4
                            </label>
                        </p>
                        <p>
                            <input type="radio" name="inlineRadioOptions" class="voiceFeedbackRadioScore" id="voiceFeedbackRadioRating5" value="5">
                            <label class="radio-inline" for="voiceFeedbackRadioRating5">
                                5
                            </label>
                        </p>
                    </form>
                </div>

                <div class="voiceFeedbackDivRateCallIssues" style="display: none;">
                    <div class="radio">
                        <p>
                            <input type="radio" name="optradio" class="voiceFeedbackRadioIssue" id="voiceFeedbackRadioIssue1" value="dropped-call">
                            <label for="voiceFeedbackRadioIssue1">
                                Call initially connected but was dropped
                            </label>
                        </p>
                    </div>
                    <div class="radio">
                        <p>
                            <input type="radio" name="optradio" class="voiceFeedbackRadioIssue" id="voiceFeedbackRadioIssue2" value="audio-latency">
                            <label for="voiceFeedbackRadioIssue2">
                                Participants can hear each other but with significant delay
                            </label>
                        </p>
                    </div>
                    <div class="radio">
                        <p>
                            <input type="radio" name="optradio" class="voiceFeedbackRadioIssue" id="voiceFeedbackRadioIssue3" value="one-way-audio">
                            <label for="voiceFeedbackRadioIssue3">
                                One participant couldn’t hear the other
                            </label>
                        </p>
                    </div>
                    <div class="radio">
                        <p>
                            <input type="radio" name="optradio" class="voiceFeedbackRadioIssue" id="voiceFeedbackRadioIssue4" value="choppy-audio">
                            <label for="voiceFeedbackRadioIssue4">
                                Periodically, participants couldn’t hear each other. Some words were lost
                            </label>
                        </p>
                    </div>
                    <div class="radio">
                        <p>
                            <input type="radio" name="optradio" class="voiceFeedbackRadioIssue" id="voiceFeedbackRadioIssue5" value="noisy-call">
                            <label for="voiceFeedbackRadioIssue5">
                                There was disturbance, background noise, low clarity
                            </label>
                        </p>
                    </div>
                    <div class="radio">
                        <p>
                            <input type="radio" name="optradio" class="voiceFeedbackRadioIssue" id="voiceFeedbackRadioIssue6" value="echo">
                            <label for="voiceFeedbackRadioIssue6">
                                There was echo during call
                            </label>
                        </p>
                    </div>
                </div>

                <button type="button" class="btn btn-default voiceSubmitFeedbackButton" id="voiceSubmitFeedbackButton">Submit</button>

            </div>
        </div>

    </div>
$('#contactsModal').append(res);
    <div class="modal-footer">
        <button type="button" class="btn btn-default btn-close-modal btn-webrtc-footer" data-dismiss="modal">Hide</button>
        <button type="button" class="btn btn-primary btn-reset-modal btn-webrtc-footer" id="resetModalButton">Back to start</button>

    </div>
</div>';

function abcd(){
  $('#contactsModal').append(htmlcode);
}
