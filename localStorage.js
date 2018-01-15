//localStorage.js
function ValidateForm(id, make, model, year, date, oil, maint) {
        this.id = id;
        this.make = make;
        this.model = model;
        this.year = year;
        this.date = date;
        this.oil = oil;
        this.maint = maint;
    }

    var info = [];

    var ref;

    function changeDiv(whichDiv) {
        $(".divContent").addClass("hidden");
        $("#" + whichDiv).removeClass("hidden");
        if (whichDiv === "div3MenuContainer") {
            ViewInfo();
        }
    }
}

    function getLocalStorageInformation() {
        ls = [];
        ls = JSON.parse(localStorage.getItem("info"));
        return ls;
    }

    function setLocalStorageScores(infoArray) {
        localStorage.clear();
        localStorage.setItem("info", JSON.stringify(infoArray));
    }

function validateForm() {
    info = getLocalStorageInformation();
    if ((info === null) || (info === undefined) || (info === "undefined") || (info === "null")) {
        info = [];
    } else {
        for (var i = 0; i < info.length; i++) {
            info[i].id = (i + 1);
        }
    }
    newInfo = new info(info.length + 1, $("#tbAddMake").val(), $("#tbAddModel").val(), $("#tbAddYear").val(), $("#tbAddDate").val(), $("#tbAddOil").val(), $("#tbAddMaint").val());
    info.push(newInfo);
    setLocalStorageInformation(info);
    $("#tbAddMake").val("");
    $("#tbAddModel").val("");
    $("#tbAddYear").val("");
    $("#tbAddDate").val("");
    $("#tbAddOil").val("");
    $("#tbAddMaint").val("");
    return false;

    function EditInformation() {
        var thisId = $("#tbHiddenId").val;
        info[thisId - 1].date = $("#tbEditMake").val();
        info[thisId - 1].date = $("#tbEditModel").val();
        info[thisId - 1].date = $("#tbEditYear").val();
        info[thisId - 1].date = $("#tbEditDate").val();
        info[thisId - 1].date = $("#tbEditOil").val();
        info[thisId - 1].date = $("#tbEditMaint").val();
        setLocalStorage(info);
        clearEditFieldsShowView();
        return false;
    }
    function clearEditFieldsShowView() {
        $("#tbAddMake").val("");
        $("#tbAddModel").val("");
        $("#tbAddYear").val("");
        $("#tbAddDate").val("");
        $("#tbAddOil").val("");
        $("#tbAddMaint").val("");
        $(".divContent").addClass("hidden");
        $("#div3MenuContainer").removeClass("hidden");
        viewInfo();
    }

    function getInfoSet(thisId) {
        $(".divContent").addClass("hidden");
        $("#divThree").removeClass("hidden");
        $("#tbHiddenId").val(info[thisId - 1].id);
        $("#tbEditMake").val(info[thisId - 1].make);
        $("#tbEditModel").val(info[thisId - 1].model);
        $("#tbEditYear").val(info[thisId - 1].year);
        $("#tbEditYear").val(info[thisId - 1].date);
        $("#tbEditOil").val(info[thisId - 1].oil);
        $("#tbEditMaint").val(info[thisId - 1].maint);
    }

    function ViewInfo() {
        info = getLocalStorageInformation();
        $("#gridInfo").jsGrid({
            width: "100%",
            height: "600px",
            sorting: true,
            paging: true,
            data: info,
            rowClick: function (whichRow) {
                getInfoSet(whichRow.item.id);
            },
            fields: [
                { name: "make", title: "Make", type: "text", width: 50 },
                { name: "model", title: "Model", type: "text", width: 50 },
                { name: "year", title: "Year", type: "number", width: 50 },
                { name: "date", title: "date", type: "number", width: 50 },
                { name: "oil", title: "Oil", type: "date", width: 50 },
                { name: "maint", title: "maint", type: "text", width: 50 },
                { name: "id", css: "hide", width: 0 }
            ]
        });
    }

    function clearInfo() {
        localStorage.clear();
        $(".divContent").addClass("hidden");
        $("#divTwo").removeClass("hidden");
        viewInfo();
    }

    $("#btnCancelEdit").click(function () {
        clearEditFieldsShowView();
    });

    $("#btnDelete").click(function () {
        var thisId = $("#tbHiddenId").val();
        var newArray = [];
        for (var i = 0; i < info.length; i++) {
            if (i !== (thisId - 1)) {
                newArray.push(info[i]);
            }
        }
        info = newArray;
        if (info.length === 0)
            localStorage.clear();
        else
            setLocalStorageInformation(info);
        clearEditFieldsShowView();
    });
}