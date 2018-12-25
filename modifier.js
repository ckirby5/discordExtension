var voiceCallButtons = document.getElementsByClassName("iconButton-3V4WS5");

// Private Message Buttons

function addCameraName() {
    var camera = document.getElementsByName("VideoCamera");
    var checkCamera = setTimeout(addCameraName, 10000);
    if ($(camera).parent().text() == '') {
        $(camera).parent().append("Start Video Call").addClass("readerButtons");
    } else {
        checkCamera;
    }
}

function addPhoneName() {
    var phone = document.getElementsByName("Phone");
    var checkPhone = setTimeout(addPhoneName, 10000);
    if ($(phone).parent().text() == '') {
        $(phone).parent().append("Start Voice Call").addClass("readerButtons");
    } else {
        checkPhone;
    }
}

function addPinName() {
    var pin = document.getElementsByName("Pin");
    var checkPins = setTimeout(addPinName, 10000);
    if ($(pin).parent().text() == '') {
        $(pin).parent().append("Pinned Messages").addClass("readerButtons");
    } else if (!$(pin).parent().hasClass('readerButtons')) {
        $(pin).parent().addClass("readerButtons");
    } else {
        checkPins;
    }
}

function addFriendsName() {
    var friends = document.getElementsByName("PersonPlus");
    var checkFriends = setTimeout(addFriendsName, 10000);
    if ($(friends).parent().text() == '') {
        $(friends).parent().append("Add Friends to DM").addClass("readerButtons");
    } else {
        checkFriends;
    }
}

function addMentionName() {
    var mention = document.getElementsByName("Mention");
    var checkMentions = setTimeout(addMentionName, 10000);
    if ($(mention).parent().text() == '') {
        $(mention).parent().append("Mentions").addClass("readerButtons");
    } else {
        checkMentions;
    }
}

function addHelpName() {
    var help = document.getElementsByName("QuestionMark");
    var checkHelp = setTimeout(addHelpName, 10000);
    if ($(help).parent().text() == '') {
        $(help).parent().append("Help").addClass("readerButtons");
    } else {
        checkHelp;
    }
}

// Private Voice Chat Buttons

function addScreenShare() {
    var ssButton = voiceCallButtons[2];
    var checkSSButton = setTimeout(addScreenShare, 10000);
    if($(ssButton).text() == '') {
        $(ssButton).append("Screen Share").addClass("readerButtons");
    } else {
        checkSSButton;
    }
}

function addWebcam() {
    var wcButton = voiceCallButtons[3];
    var checkWCButton = setTimeout(addWebcam, 10000);
    if ($(wcButton).text() == '') {
        $(wcButton).append("Toggle Webcam").addClass("readerButtons");
    } else {
        checkWCButton;
    }
}

function addMicMute() {
    var mmButton = voiceCallButtons[4];
    var checkMMButton = setTimeout(addMicMute, 10000);
    if ($(mmButton).text() == '') {
        $(mmButton).append("Mute or Unmute Mic").addClass("readerButtons");
    } else {
        checkMMButton;
    }
}

function addUserSettings() {
    var usButton = voiceCallButtons[5];
    var checkUSButton = setTimeout(addUserSettings, 10000);
    if ($(usButton).text() == '') {
        $(usButton).append("User Settings").addClass("readerButtons");
    } else {
        checkUSButton;
    }
}

$(document).ready(function(){
    addCameraName();
    addScreenShare();
    addWebcam();
    addMicMute();
    addUserSettings();
    addPhoneName();
    addPinName();
    addFriendsName();
    addMentionName();
    addHelpName();
});