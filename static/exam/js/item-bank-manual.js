/**
 * Created by GEGE on 2017/11/30.
 */
/*----------------------makePaper----------------------------*/
var defaultSelections=$("#selectionsContainer").html();
$(document).on("change","#quesType",function(){
    var quesType=$(this).val();
    switch (quesType){
        case "选择题":
            console.log("----------");
            $("#judgeDiv").css({display:"none"});
            $("#selectionDiv").css({display:"block"});

            break;
        case "填空题":
            $("#selectionDiv").css({display:"none"});
            $("#judgeDiv").css({display:"none"});

            break;
        case "判断题":
            $("#selectionDiv").css({display:"none"});
            $("#judgeDiv").css({display:"block"});

            break;
        case "简答题":
            $("#selectionDiv").css({display:"none"});
            $("#judgeDiv").css({display:"none"});

            break;
        case "程序设计题":
            $("#selectionDiv").css({display:"none"});
            $("#judgeDiv").css({display:"none"});

            break;
    }
});
var selects=['A','B','C','D','E','F','G','H','I','J'];
$(document).on("change","#selectNum",function(){
    var num=$(this).val();
    var selectContent="";
    for(var i=0;i<num;i++) {
        var select = "<div class='container-div'>" +
            "<div class='form-group'>" +
            "<div class='input-group'>" +
            "<span class='input-group-addon bg-primary'>" +
            "<label class='radio-inline'>" +
            "<input type='radio' name='singleSelectRadio' id=''"+selects[i].toLowerCase()+"Radio'> " + selects[i] +
            "</label>" +
            "</span>" +
            "<input type='text' class='form-control' placeholder='请输入选项内容'>" +
            "</div>" +
            "</div>" +
            "</div>";
        selectContent+=select;
    }
    $(".selectionsContainer").html(selectContent);
})
