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

function addGiftName() {
    var gift = document.getElementsByName("Gift");
    var checkGift = setTimeout(addGiftName, 10000);
    if ($(gift).parent().text() == '') {
        $(gift).parent().append("Gift").addClass("readerButtons");
    } else {
        checkGift;
    }
}

function addEmojiText() {
    var emoji = document.getElementsByClassName("emojiButton-3uL3Aw");
    var checkEmoji = setTimeout(addEmojiText, 10000);
    if ($(emoji).children().children().text() == '') {
        $(emoji).children().children().append("Emoji").addClass("readerButtons");
    } else if (!$(emoji).children().children().hasClass("readerButtons")) {
        $(emoji).children().children().addClass("readerButtons");
    } else {
        checkEmoji;
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

// Conversation(s) window buttons

function addUnmuteButton() {
    var unmute = $("[aria-label=Unmute]");
    var checkUnmuteButton = setTimeout(addUnmuteButton, 10000);
    if (unmute.text() == '') {
        unmute.append("Unmute/Mute Microphone").addClass("readerButtons");
    } else {
        checkUnmuteButton;
    }
}

function addDeafenButton() {
    var deafen = $("[aria-label=Deafen]");
    var checkDeafenButton = setTimeout(addDeafenButton, 10000);
    if (deafen.text() == '') {
        deafen.append("Toggle Audio and Microphone on/off").addClass("readerButtons");
    } else {
        checkDeafenButton;
    }
}

function addUserSettingsButton() {
    var settings = $("[aria-label=User Settings]");
    var checkUserSettingsButton = setTimeout(addUserSettingsButton, 10000);
    if (settings.text() == '') {
        settings.append("User Settings").addClass("readerButtons");
    } else {
        checkUserSettingsButton;
    }
}

$(document).ready(function(){
    addCameraName();
    addPhoneName();
    addPinName();
    addFriendsName();
    addMentionName();
    addHelpName();
    addGiftName();
    addEmojiText();
    addScreenShare();
    addWebcam();
    addMicMute();
    addUserSettings();
    addUnmuteButton();
    addDeafenButton();
    addUserSettingsButton();
});