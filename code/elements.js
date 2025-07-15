//PIOTR ZAGAWA 2024

let ThemeElementsList = 
[
    "Background",
    "VerticalLine",
    "CenterLine",

    "TimeDigits",
    "TimeSymbol",

    "SymbolDND",
    "SymbolDNDBackground",

    "SymbolCONNOn",
    "SymbolCONNOff",
    "SymbolCONNBackground",
    
    "TopNotch",
    "TopNotchOutline",
    "WeekDayText",
    "MonthDayText",

    "TopBar",
    "TopBarText",
    "SunOn",
    "SunOff",
    "SunTimeText",

    "LevelBar",
    "LevelBarText",
    "SummaryText",

    "BottomBar",
    "BottomBarOutline",
    "BottomBarText",
    "BottomBarNotif",
    "ProgressBar",
    "ProgressBarSegment",
];

function themeCodeLength()
{
    return (ThemeElementsList.length * 2);
}

class ThemeElements
{
    constructor()
    {
    }

    createSelector()
    {
        let selector = document.createElement("select");
        selector.id = "ElementSelector";
        selector.size = ThemeElementsList.length;

        selector.onchange = function(e)
        {
            let element_name = e.target.value;
            ThemeElements.onElementSelected(element_name);
        };

        let elements = document.querySelector("#Elements");

        for (let index = 0; index < ThemeElementsList.length; index++)
        {
            let name = ThemeElementsList[index];
            let option = document.createElement("option");
            option.value = name;
            option.text = name;        

            selector.appendChild(option);
        }

        elements.appendChild(selector);

        this.elementSelector = selector;
    }

    unselect()
    {
        this.elementSelector.selectedIndex = -1;
    }

    static onElementSelected(element_name)
    {
        designerApp.OnSelectedElementName = element_name;
    }
}
