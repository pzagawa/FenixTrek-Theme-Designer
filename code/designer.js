//PIOTR ZAGAWA 2024

let watchfacePreview = null;
let themeElements = null;
let colorsPanel = null;
let designerApp = null;

//App entry point after SVG load
function onWatchFaceLoaded(e)
{
    let svgDocument = e.target.ownerDocument;

    watchfacePreview = new WatchfacePreview(svgDocument);
    watchfacePreview.setDefaultTheme();
    
    themeElements = new ThemeElements();
    themeElements.createSelector();

    colorsPanel = new ColorsPanel();
    colorsPanel.createPalette();

    designerApp = new DesignerApp();
    designerApp.updateThemeCodeFromWatchfaceColors();
    designerApp.updateColorsPalette();
}

function copyThemeCode()
{
    navigator.clipboard.writeText(designerApp.themeCodeText);
}

function resetThemeCode()
{
    watchfacePreview.setDefaultTheme();
    watchfacePreview.resetElementsHighlight();
    designerApp.updateThemeCodeFromWatchfaceColors();
    designerApp.updateColorsPalette();
    themeElements.unselect();
    ColorsPanel.resetSelectedColorItems();
}

class DesignerApp
{
    constructor()
    {
        this.elementName = "";
        this.colorName = "";
        this.themeCodeText = "";

        //bind input event
        let code_edit = document.getElementById("ED_ThemeCode");

        code_edit.oninput = (event) =>
        {
            let text = event.target.value.toUpperCase();
            this.OnThemeCodeTextChanged = text;
        };

        //get browser query theme
        const query_string = window.location.search;
        const url_params = new URLSearchParams(query_string);
        const theme_code = url_params.get("theme");

        if (theme_code != null)
        {
            code_edit.value = theme_code;
            this.OnThemeCodeTextChanged = theme_code;
        }

        this.updateThemeCodeInputStatus();
    }

    //called from themeElements
    set OnSelectedElementName(element_name)
    {
        this.elementName = element_name;

        this.updateColorsPalette();
        this.selectElementColorItem(this.elementName);

        watchfacePreview.setElementHighlight(this.elementName, true);
    }

    //called from colorsPanel
    set OnSelectedColorName(color_name)
    {
        this.colorName = color_name;

        //convert color
        let color = colorNameToColor(color_name);

        //unable to convert, pass default
        if (color == null)
        {
            color = 0x000000;
        }

        //validate
        let read_color_name = colorToName(color);

        if (read_color_name != color_name)
        {
            console.log(`Failed to convert color: ${this.colorName} / color: ${color} / read name: ${read_color_name}`);
        }

        //apply hex color to watchface preview
        let hex_color = colorToHexString(color);

        watchfacePreview.setElementColor(this.elementName, hex_color);

        //generate and set theme code to edit field
        this.updateThemeCodeFromWatchfaceColors();
    }

    get selectedColorName()
    {
        return this.colorName;
    }

    //called from colorsPanel
    set OnThemeCodeTextChanged(code_text)
    {
        let color_name_list = splitThemeCodeToColorNames(code_text);

        watchfacePreview.colorNames = color_name_list;

        this.themeCodeText = watchfacePreview.themeCode;
        this.updateThemeCodeInputStatus();

        updateThumbnail();
    }
    
    //Selects palette color item for current color value assigned to element
    selectElementColorItem(element_name)
    {
        let element_hex_color = watchfacePreview.hexColorOfElement(element_name);
        let element_color = hexStringToColor(element_hex_color);
        let color_name = colorToName(element_color);

        ColorsPanel.selectColorItemByColorName(color_name);
    }

    updateColorsPalette()
    {
        let title = document.getElementById("ColorsTitle");

        if (this.elementName.length == 0)
        {
            title.innerText = "Select color";
            colorsPanel.selectionEnabled = false;
        }
        else
        {
            title.innerHTML = `Select color for <b>${this.elementName}</b>`;
            colorsPanel.selectionEnabled = true;
        }
    }

    updateThemeCodeInputText()
    {
        let code_edit = document.getElementById("ED_ThemeCode");
        code_edit.value = this.themeCodeText;
    }

    updateThemeCodeInputStatus()
    {
        let code_edit = document.getElementById("ED_ThemeCode");

        let theme_code_length = code_edit.value.length;

        //valid if started without query - empty theme code
        if (theme_code_length == 0)
        {
            code_edit.setAttribute("code_length_valid", "true");
            return;
        }

        let code_length_valid = (theme_code_length == themeCodeLength());

        code_edit.setAttribute("code_length_valid", code_length_valid ? "true" : "false");
    }

    updateThemeCodeFromWatchfaceColors()
    {
        this.themeCodeText = watchfacePreview.themeCode;
        this.updateThemeCodeInputText();

        updateThumbnail();

        //update query string in browser
        const query_string = window.location.search;
        const url_params = new URLSearchParams(query_string);
        url_params.set("theme", this.themeCodeText);
        history.replaceState(null, null, "?" + url_params.toString());
    }
}
