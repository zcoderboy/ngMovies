import * as $ from 'jquery';

export function HeartBeat(target) {
    if ($(target).hasClass("fa-heart-o")) {
        $(target).removeClass("fa-heart-o");
        $(target).addClass("fa-heart");
        $(target).addClass("heartbeat");
        $(target).attr("liked","true");
        return true;
    } else if ($(target).hasClass("fa-heart")) {
        $(target).removeClass("fa-heart");
        $(target).addClass("fa-heart-o");
        $(target).removeClass("heartbeat");
        $(target).attr("liked","false");
        return false;
    }
}
