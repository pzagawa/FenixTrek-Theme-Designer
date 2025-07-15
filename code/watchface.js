//PIOTR ZAGAWA 2024

class WatchfacePreview
{
    constructor(svgDocument)
    {
        this.svgDocument = svgDocument;
        this.elementColor = {};
        this.highlightElementName = null;

        //init properties
        this.colorBackground = "#000000";
        this.colorVerticalLine = "#000000";
        this.colorCenterLine = "#000000";

        this.colorTimeDigits = "#000000";
        this.colorTimeSymbol = "#000000";

        this.colorSymbolDND = "#000000";
        this.colorSymbolDNDBackground = "#000000";

        this.colorSymbolCONNOn = "#000000";
        this.colorSymbolCONNOff = "#000000";
        this.colorSymbolCONNBackground = "#000000";

        this.colorTopNotch = "#000000";
        this.colorTopNotchOutline = "#000000";
        this.colorWeekDayText = "#000000";
        this.colorMonthDayText = "#000000";

        this.colorTopBar = "#000000";
        this.colorTopBarText = "#000000";
        this.colorSunOn = "#000000";
        this.colorSunOff = "#000000";
        this.colorSunTimeText = "#000000";

        this.colorLevelBar = "#000000";
        this.colorLevelBarText = "#000000";
        this.colorSummaryText = "#000000";

        this.colorBottomBar = "#000000";
        this.colorBottomBarOutline = "#000000";
        this.colorBottomBarText = "#000000";
        this.colorBottomBarNotif = "#000000";
        this.colorProgressBar = "#000000";
        this.colorProgressBarSegment = "#000000";
    } 
  
    setDefaultTheme()
    {
        let default_color_name_list = splitThemeCodeToColorNames(DEFAULT_COLOR_THEME);

        watchfacePreview.colorNames = default_color_name_list;
    }

    //SETTERS

    set colorBackground(color)
    {
        let element = this.svgDocument.querySelector("#Background");
        element.querySelector("rect").style.fill = color;
        this.elementColor["Background"] = color;
    }

    set colorVerticalLine(color)
    {
        let element = this.svgDocument.querySelector("#VerticalLine");
        element.style.fill = color;
        this.elementColor["VerticalLine"] = color;
    }
    
    set colorCenterLine(color)
    {
        let element = this.svgDocument.querySelector("#CenterLine");
        element.querySelector("rect").style.fill = color;
        this.elementColor["CenterLine"] = color;
    }
    
    set colorTimeDigits(color)
    {
        let element = this.svgDocument.querySelector("#TimeDigits");
        element.style.fill = color;
        this.elementColor["TimeDigits"] = color;
    }
    
    set colorTimeSymbol(color)
    {
        let element = this.svgDocument.querySelector("#TimeSymbol");
        element.style.fill = color;
        this.elementColor["TimeSymbol"] = color;
    }
    
    set colorSymbolDND(color)
    {
        let element = this.svgDocument.querySelector("#SymbolDND");
        element.querySelector("rect").style.fill = color;
        this.elementColor["SymbolDND"] = color;
    }
    
    set colorSymbolDNDBackground(color)
    {
        let element = this.svgDocument.querySelector("#SymbolDNDBackground");
        element.querySelector("path").style.fill = color;
        this.elementColor["SymbolDNDBackground"] = color;
    }
    
    set colorSymbolCONNOn(color)
    {
        let element = this.svgDocument.querySelector("#SymbolCONNOn");
        element.querySelector("rect").style.fill = color;
        this.elementColor["SymbolCONNOn"] = color;
    }
    
    set colorSymbolCONNOff(color)
    {
        let element = this.svgDocument.querySelector("#SymbolCONNOff");
        element.style.fill = color;
        this.elementColor["SymbolCONNOff"] = color;
    }
    
    set colorSymbolCONNBackground(color)
    {
        let element = this.svgDocument.querySelector("#SymbolCONNBackground");
        element.style.fill = color;
        this.elementColor["SymbolCONNBackground"] = color;
    }
    
    set colorTopNotch(color)
    {
        let element = this.svgDocument.querySelector("#TopNotch");
        element.style.fill = color;
        this.elementColor["TopNotch"] = color;
    }
    
    set colorTopNotchOutline(color)
    {
        let element = this.svgDocument.querySelector("#TopNotchOutline");
        element.querySelector("path").style.fill = color;
        this.elementColor["TopNotchOutline"] = color;
    }
    
    set colorWeekDayText(color)
    {
        let element = this.svgDocument.querySelector("#WeekDayText");
        element.querySelector("rect").style.fill = color;
        this.elementColor["WeekDayText"] = color;
    }
    
    set colorMonthDayText(color)
    {
        let element = this.svgDocument.querySelector("#MonthDayText");
        element.style.fill = color;
        this.elementColor["MonthDayText"] = color;
    }
    
    set colorTopBar(color)
    {
        let element = this.svgDocument.querySelector("#TopBar");
        element.style.fill = color;
        this.elementColor["TopBar"] = color;
    }
    
    set colorTopBarText(color)
    {
        let element = this.svgDocument.querySelector("#TopBarText");
        element.style.fill = color;
        this.elementColor["TopBarText"] = color;
    }
    
    set colorSunOn(color)
    {
        let element = this.svgDocument.querySelector("#SunOn");
        element.style.fill = color;
        this.elementColor["SunOn"] = color;
    }
    
    set colorSunOff(color)
    {
        let element = this.svgDocument.querySelector("#SunOff");
        element.style.fill = color;
        this.elementColor["SunOff"] = color;
    }
    
    set colorSunTimeText(color)
    {
        let element = this.svgDocument.querySelector("#SunTimeText");
        element.style.fill = color;
        this.elementColor["SunTimeText"] = color;
    }
    
    set colorLevelBar(color)
    {
        let element = this.svgDocument.querySelector("#LevelBar");
        element.style.fill = color;
        this.elementColor["LevelBar"] = color;
    }
    
    set colorLevelBarText(color)
    {
        let element = this.svgDocument.querySelector("#LevelBarText");
        element.style.fill = color;
        this.elementColor["LevelBarText"] = color;
    }
    
    set colorSummaryText(color)
    {
        let element = this.svgDocument.querySelector("#SummaryText");
        element.style.fill = color;
        this.elementColor["SummaryText"] = color;
    }
    
    set colorBottomBar(color)
    {
        let element = this.svgDocument.querySelector("#BottomBar");
        element.querySelector("path").style.fill = color;
        this.elementColor["BottomBar"] = color;
    }
    
    set colorBottomBarOutline(color)
    {
        let element = this.svgDocument.querySelector("#BottomBarOutline");
        element.querySelector("path").style.fill = color;
        this.elementColor["BottomBarOutline"] = color;
    }
    
    set colorBottomBarText(color)
    {
        let element = this.svgDocument.querySelector("#BottomBarText");
        element.style.fill = color;
        this.elementColor["BottomBarText"] = color;
    }
    
    set colorBottomBarNotif(color)
    {
        let element = this.svgDocument.querySelector("#BottomBarNotif");
        element.style.fill = color;
        this.elementColor["BottomBarNotif"] = color;
    }
    
    set colorProgressBar(color)
    {
        let element = this.svgDocument.querySelector("#ProgressBar");
        element.style.fill = color;
        this.elementColor["ProgressBar"] = color;
    }
    
    set colorProgressBarSegment(color)
    {
        let element = this.svgDocument.querySelector("#ProgressBarSegment");
        element.style.fill = color;
        this.elementColor["ProgressBarSegment"] = color;
    }

    // HIGHLIGHT ELEMENT

    highlightElement(element_name, enabled)
    {
        let element = this.svgDocument.querySelector("#" + element_name);

        if (enabled)
        {
            let hex_color = this.hexColorOfElement(element_name);
            let element_color = hexStringToColor(hex_color);
            let color_name = colorToName(element_color);

            let color_odd_table = isColorNameOddTable(color_name);

            element.style.stroke = color_odd_table ? "#ffffffff" : "#000000ff";
            element.style.strokeWidth = 1;
            element.style.strokeDasharray = [ 4,1 ];
        }
        else
        {
            element.style.stroke = null;
        }             
    }

    resetElementsHighlight()
    {
        this.highlightElementName = null;

        this.highlightElement("Background", false);
        this.highlightElement("VerticalLine", false);
        this.highlightElement("CenterLine", false);
        
        this.highlightElement("TimeDigits", false);
        this.highlightElement("TimeSymbol", false);

        this.highlightElement("SymbolDND", false);
        this.highlightElement("SymbolDNDBackground", false);

        this.highlightElement("SymbolCONNOn", false);
        this.highlightElement("SymbolCONNOff", false);
        this.highlightElement("SymbolCONNBackground", false);

        this.highlightElement("TopNotch", false);
        this.highlightElement("TopNotchOutline", false);
        this.highlightElement("WeekDayText", false);
        this.highlightElement("MonthDayText", false);

        this.highlightElement("TopBar", false);
        this.highlightElement("TopBarText", false);
        this.highlightElement("SunOn", false);
        this.highlightElement("SunOff", false);
        this.highlightElement("SunTimeText", false);

        this.highlightElement("LevelBar", false);
        this.highlightElement("LevelBarText", false);
        this.highlightElement("SummaryText", false);

        this.highlightElement("BottomBar", false);
        this.highlightElement("BottomBarOutline", false);
        this.highlightElement("BottomBarText", false);
        this.highlightElement("BottomBarNotif", false);
        this.highlightElement("ProgressBar", false);
        this.highlightElement("ProgressBarSegment", false);
    }

    setElementHighlight(element_name, enabled)
    {
        this.resetElementsHighlight();
        this.highlightElement(element_name, enabled)

        if (enabled)
        {
            this.highlightElementName = element_name;
        }
   }

    //OTHERS

    hexColorOfElement(element_name)
    {
        return this.elementColor[element_name];
    }

    setElementColor(element_name, hex_color)
    {
        if (element_name == "Background")
            this.colorBackground = hex_color;
        if (element_name == "VerticalLine")
            this.colorVerticalLine = hex_color;
        if (element_name == "CenterLine")
            this.colorCenterLine = hex_color;
        
        if (element_name == "TimeDigits")
            this.colorTimeDigits = hex_color;
        if (element_name == "TimeSymbol")
            this.colorTimeSymbol = hex_color;
        
        if (element_name == "SymbolDND")
            this.colorSymbolDND = hex_color;
        if (element_name == "SymbolDNDBackground")
            this.colorSymbolDNDBackground = hex_color;

        if (element_name == "SymbolCONNOn")
            this.colorSymbolCONNOn = hex_color;
        if (element_name == "SymbolCONNOff")
            this.colorSymbolCONNOff = hex_color;
        if (element_name == "SymbolCONNBackground")
            this.colorSymbolCONNBackground = hex_color;

        if (element_name == "TopNotch")
            this.colorTopNotch = hex_color;
        if (element_name == "TopNotchOutline")
            this.colorTopNotchOutline = hex_color;
        if (element_name == "WeekDayText")
            this.colorWeekDayText = hex_color;
        if (element_name == "MonthDayText")
            this.colorMonthDayText = hex_color;

        if (element_name == "TopBar")
            this.colorTopBar = hex_color;
        if (element_name == "TopBarText")
            this.colorTopBarText = hex_color;
        if (element_name == "SunOn")
            this.colorSunOn = hex_color;
        if (element_name == "SunOff")
            this.colorSunOff = hex_color;
        if (element_name == "SunTimeText")
            this.colorSunTimeText = hex_color;

        if (element_name == "LevelBar")
            this.colorLevelBar = hex_color;
        if (element_name == "LevelBarText")
            this.colorLevelBarText = hex_color;
        if (element_name == "SummaryText")
            this.colorSummaryText = hex_color;
       
        if (element_name == "BottomBar")
            this.colorBottomBar = hex_color;
        if (element_name == "BottomBarOutline")
            this.colorBottomBarOutline = hex_color;
        if (element_name == "BottomBarText")
            this.colorBottomBarText = hex_color;
        if (element_name == "BottomBarNotif")
            this.colorBottomBarNotif = hex_color;
        if (element_name == "ProgressBar")
            this.colorProgressBar = hex_color;
        if (element_name == "ProgressBarSegment")
            this.colorProgressBarSegment = hex_color;
    }

    //input: array of color_names from splitThemeCodeToColorNames
    set colorNames(color_name_list)
    {
        let default_color_name_list = splitThemeCodeToColorNames(DEFAULT_COLOR_THEME);

        for (let index = 0; index < ThemeElementsList.length; index++)
        {
            let element_name = ThemeElementsList[index];
            let default_color_name = default_color_name_list[index];

            let color = null;

            if (index < color_name_list.length)
            {
                let color_name = color_name_list[index];
                color = colorNameToColor(color_name);
            }
            else
            {
                color = colorNameToColor(default_color_name);
            }

            let hex_color = colorToHexString(color);

            watchfacePreview.setElementColor(element_name, hex_color);
        }
    }

    get colorNames()
    {
        let color_name_list = [];

        for (let index = 0; index < ThemeElementsList.length; index++)
        {
            let element_name = ThemeElementsList[index];

            let element_hex_color = this.hexColorOfElement(element_name);
            let element_color = hexStringToColor(element_hex_color);
            let color_name = colorToName(element_color);

            color_name_list.push(color_name);
        }

        return color_name_list;
    }

    //generates theme code text from watchface colors
    get themeCode()
    {
        let code = "";

        for (let index = 0; index < ThemeElementsList.length; index++)
        {
            let element_name = ThemeElementsList[index];

            let element_hex_color = this.hexColorOfElement(element_name);
            let element_color = hexStringToColor(element_hex_color);
            let color_name = colorToName(element_color);

            code = code + color_name;
        }

        return code;
    }

    setAllElementsToColor(color_name)
    {
        for (let index = 0; index < ThemeElementsList.length; index++)
        {
            let element_name = ThemeElementsList[index];

            let color = colorNameToColor(color_name);

            if (color == null)
            {
                color = 0x000000;
            }

            let hex_color = colorToHexString(color);

            watchfacePreview.setElementColor(element_name, hex_color);
        }

        designerApp.updateThemeCodeFromWatchfaceColors();
    }
}

function updateThumbnail()
{
    let highlighted_element_name = watchfacePreview.highlightElementName;

    watchfacePreview.resetElementsHighlight();

    var svgString = new XMLSerializer().serializeToString(document.getElementById("svgWF"));
    var canvas = document.getElementById("SmallPreviewCanvas");
    var context = canvas.getContext("2d");
    
    var DOMURL = self.URL || self.webkitURL || self;
    var image = new Image();
    var svg = new Blob([svgString], {type: "image/svg+xml;charset=utf-8"});

    var url = DOMURL.createObjectURL(svg);
    image.onload = function()
    {
        context.drawImage(image, 0, 0);

        var png = canvas.toDataURL("image/png");
        let png_html = `<img src="${png}"/>`;

        let el_png = document.querySelector('#SmallPreviewPNG');
        el_png.innerHTML = png_html

        DOMURL.revokeObjectURL(png);
    };

    image.src = url;

    if (highlighted_element_name != null)
    {
        watchfacePreview.setElementHighlight(highlighted_element_name, true);
    }
}    
