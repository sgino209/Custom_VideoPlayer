/**
 * @file Contains the logic and all functions used for making of Custom Video Player
 * @author Jay Kapoor <jatinkapoor995@gmail.com>
 * @version 0.0.1
 * All rights reserved to Shahar Gino, June 2020
 */
 overall_duartion=get_seconds(overall_duartion);var myVideoPlayer=document.getElementById("video_player"),mp4source=document.getElementById("mp4source"),progress=document.getElementById("zoom-out-bar"),zoom_in_progress=document.getElementById("zoom-in-progress"),style=document.querySelector('[data="slide-width"]');marker_position=get_seconds(marker_position),marker_width=get_seconds(marker_width),marker_end_position=parseInt(marker_width)+parseInt(marker_position),slider_width=marker_width/overall_duartion*100,slider_width=Math.floor(slider_width),style.innerHTML=".slider::-webkit-slider-thumb { width: "+slider_width+"% !important; }";var Total_duration=0,prev_duration=0,vids=[],start_count=[],end_count=[],Src=[],ToolTip=[],Time=[],count=0,sourceDuration=[],additionalArray=[];for(let[e,t]of Object.entries(sources)){var extension=t.name.split(/[#?]/)[0].split(".").pop().trim();if("mp4"==extension||"ogg"==extension||"m4a"==extension){var span=document.createElement("span");span.classList="zoom-in-span",span.setAttribute("source",t.name),Time[count]="("+t.start+","+t.end+")";var start=get_seconds(t.start),end=get_seconds(t.end);start_count[count]=start,end_count[count]=end,Src[count]=t.name,ToolTip[count]=t.tooltip,null!=t.additional&&(additionalArray[t.name]=t.additional),count++,Total_duration+=end-start,sourceDuration.push(end-start),vids.push(t.name)}}for(var ac=0,flag=!1,old_d=0,localposition=0,active_count=-1,i=0;i<=overall_duartion;i++)start_count[ac]==i&&(flag=!0,active_count++),0==flag?jQuery("#annotated_bar").append('<span class="bar gap" data-position="'+i+'"></span>'):jQuery("#annotated_bar").append('<span class="bar marker '+Src[ac].substring(Src[ac].lastIndexOf("/")+1).replace(/\./g,"_")+'" data-src="'+Src[ac]+'" data-active-count="'+active_count+'" data-position="'+i+'" data-local-position="'+localposition+'" data-time="'+Time[ac]+'"  data-tooltip="'+ToolTip[ac]+'"></span>'),1==flag&&end_count[ac]==i&&(flag=!1,ac++),1==flag&&localposition++;var activeVideo=0;document.querySelector(".next").addEventListener("click",function(){if($(".marker").removeClass("active_index"),activeVideo=++activeVideo%vids.length,old_d+=myVideoPlayer.duration,0==activeVideo&&(old_d=0),myVideoPlayer.src=vids[activeVideo],null!=additionalArray[vids[activeVideo]]){var e=document.createElement("video");e.id="additional_overlay_video",e.setAttribute("controlsList","nodownload"),e.setAttribute("controls",""),e.setAttribute("disablepictureinpicture",""),e.src=additionalArray[vids[activeVideo]],e.autoplay=!0,e.controls=!0,$("#additional_video").append(e)}else $("#additional_overlay_video").remove()}),$(document).on("click","span.marker",function(){$("#additional_overlay_video").remove(),$(".marker").removeClass("active_index"),myVideoPlayer.src=$(this).data("src");var e=$(this).data("src"),t=e.substring(e.lastIndexOf("/")+1).replace(/\./g,"_"),a=document.getElementsByClassName(t)[0].getAttribute("data-local-position"),o=document.getElementsByClassName(t)[0].getAttribute("data-active-count");if(activeVideo=parseInt(o),old_d=a,null!=additionalArray[e]){var r=document.createElement("video");r.id="additional_overlay_video",r.setAttribute("controlsList","nodownload"),r.setAttribute("controls",""),r.setAttribute("disablepictureinpicture",""),r.src=additionalArray[e],r.autoplay=!0,r.controls=!0,$("#additional_video").append(r)}else $("#additional_overlay_video").remove()}),document.querySelector(".previous").addEventListener("click",function(){if($(".marker").removeClass("active_index"),(old_d-=myVideoPlayer.duration)<=0&&(old_d=0),(activeVideo=--activeVideo%vids.length)<0&&(activeVideo=vids.length-1),myVideoPlayer.src=vids[activeVideo],null!=additionalArray[vids[activeVideo]]){var e=document.createElement("video");e.id="additional_overlay_video",e.setAttribute("controlsList","nodownload"),e.setAttribute("controls",""),e.setAttribute("disablepictureinpicture",""),e.src=additionalArray[vids[activeVideo]],e.autoplay=!0,e.controls=!0,$("#additional_video").append(e)}else $("#additional_overlay_video").remove()}),myVideoPlayer.addEventListener("ended",function(e){if($(".marker").removeClass("active_index"),$("#additional_overlay_video").remove(),old_d+=myVideoPlayer.duration,0==(activeVideo=++activeVideo%vids.length)&&(old_d=0),myVideoPlayer.src=vids[activeVideo],null!=additionalArray[vids[activeVideo]]){var t=document.createElement("video");t.id="additional_overlay_video",t.setAttribute("controlsList","nodownload"),t.setAttribute("controls",""),t.setAttribute("disablepictureinpicture",""),t.src=additionalArray[vids[activeVideo]],t.autoplay=!0,t.controls=!0,$("#additional_video").append(t)}else $("#additional_overlay_video").remove()});var prepend_timeframe_zoom_out="<span class='timeframe_zoom_out'>00:00:00</span>",append_timeframe_zoom_out="<span class='timeframe_zoom_out'>"+secondsToHms(overall_duartion)+"</span>";$("div.zoom-out-bar,.slider-outer-container").prepend(prepend_timeframe_zoom_out),$("div.zoom-out-bar,.slider-outer-container").append(append_timeframe_zoom_out),$(document).ready(function(){$(document).on("click",".zoom-in-span",function(){var e=$(this).attr("source");prev_duration=myVideoPlayer.duration,myVideoPlayer.pause(),mp4source.setAttribute("src",e),myVideoPlayer.setAttribute("src",e),myVideoPlayer.load(),myVideoPlayer.play(),myVideoPlayer.addEventListener("loadedmetadata",function(){myVideoPlayer.duration})})});var current_video_player_src="";myVideoPlayer.addEventListener("loadedmetadata",function(){progress.setAttribute("max",overall_duartion),zoom_in_progress.setAttribute("max",overall_duartion),0==activeVideo?$(".arrow.left").css("opacity","0.5").attr("disabled",!0):$(".arrow.left").css("opacity","1").attr("disabled",!1);var e=vids.length-1;activeVideo==e?$(".arrow.right").css("opacity","0.5").attr("disabled",!0):$(".arrow.right").css("opacity","1").attr("disabled",!1)},!1),display_markers("","",current_video_player_src=(current_video_player_src=myVideoPlayer.src).substring(current_video_player_src.lastIndexOf("/")+1).replace(/\./g,"_"));var index=0,marker="";function get_seconds(e){var t=e.split(":");return 60*+t[0]*60+60*+t[1]+ +t[2]}function secondsToHms(e){e=Number(e);var t=Math.floor(e/3600),a=Math.floor(e%3600/60),o=Math.floor(e%3600%60);return("0"+t).slice(-2)+":"+("0"+a).slice(-2)+":"+("0"+o).slice(-2)}myVideoPlayer.addEventListener("timeupdate",function(){if(current_video_player_src=(current_video_player_src=myVideoPlayer.src).substring(current_video_player_src.lastIndexOf("/")+1).replace(/\./g,"_"),"none"==document.getElementsByClassName(current_video_player_src)[0].style.display){var e=$(".marker:visible").first().data("src");myVideoPlayer.src=e}var t=myVideoPlayer.src;t=t.substring(t.lastIndexOf("/")+1).replace(/\./g,"_"),index=Math.floor(myVideoPlayer.currentTime),marker=document.getElementsByClassName(t),$("."+t).removeClass("active_index"),marker[index].classList.add("active_index"),progress.getAttribute("max")||progress.setAttribute("max",overall_duartion),zoom_in_progress.getAttribute("max")||zoom_in_progress.setAttribute("max",overall_duartion),progress.value=$(".active_index").data("position"),zoom_in_progress.value=$(".active_index").data("position"),$("div.slider-outer-container .timeframe_zoom_out").first().text(secondsToHms(progress.value)),$("div.slider-outer-container .timeframe_zoom_out").first().text(secondsToHms(progress.value))}),$(document).on("mouseenter","span.bar.marker",function(e){$src=$(this).data("src"),$time=$(this).data("time"),$tooltip=$(this).data("tooltip"),$("#hoverData").html("<ul><li>"+$src+"</li><li>Time="+$time+"</li><li>ToolTip="+$tooltip+"</li></ul>").show().css({top:e.pageY-60,left:e.pageX+10})}),$(document).on("mouseleave","span.bar.marker",function(){$src=$(this).data("src"),$time=$(this).data("time"),$tooltip=$(this).data("tooltip"),$("#hoverData").html("").hide()}),videojs("video_player",{controlBar:{fullscreenToggle:!1}});var Button=videojs.getComponent("Button"),MyButton=videojs.extend(Button,{constructor:function(){Button.apply(this,arguments),this.addClass("vjs-fullscreen-control"),this.addClass("fullscreen-control")},handleClick:function(){}});videojs.registerComponent("MyButton",MyButton);var player=videojs("video_player");player.getChild("controlBar").addChild("myButton",{}),player.ready(function(){player.tech_.off("dblclick")}),$(document).on("click",".fullscreen-control",function(){player.fluid(!0),$(".video_container").addClass("fullscreen-mode"),$(this).addClass("exitfullscreen-control"),$(this).removeClass("fullscreen-control")}),$(document).on("click",".exitfullscreen-control",function(){player.fluid(!1),$(".video_container").removeClass("fullscreen-mode"),$(this).removeClass("exitfullscreen-control"),$(this).addClass("fullscreen-control")});var sliderfg=createD3RangeSlider(0,overall_duartion,"#slider-container");sliderfg.range(marker_position,marker_end_position);var prepend_timeframe="<span class='timeframe'>"+secondsToHms(marker_position)+"</span>",append_timeframe="<span class='timeframe'>"+secondsToHms(marker_end_position)+"</span>";function display_markers(e=null,t=null,a=null,o=!1){for($("span.marker").hide(),e&&(marker_position=e),t&&(marker_end_position=t),$("#annotated_bar .timeframe").eq(0).text(secondsToHms(marker_position)),$("#annotated_bar .timeframe").eq(1).text(secondsToHms(marker_end_position)),$i=marker_position;$i<=marker_end_position;$i++){var r=$("span[data-position='"+$i+"']").attr("class");(r=(r=(r=(r=r.replace("bar","")).replace("marker","")).replace("gap","")).trim())&&(currentItem=r,$("."+r).show())}if(o){$(".marker").removeClass("active_index");var i=$(".marker:visible").first().data("src");myVideoPlayer.src=i}else{i=$(".marker:visible").first().data("src"),i=$(".marker:visible").first().data("src");myVideoPlayer.src=i}}$("#annotated_bar").prepend(prepend_timeframe),$("#annotated_bar").append(append_timeframe),sliderfg.onChange(function(e){display_markers(e.begin,e.end,current_video_player_src,!0)});