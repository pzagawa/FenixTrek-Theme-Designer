//PIOTR ZAGAWA 2024

const DEFAULT_COLOR_THEME = "A0C5C5H7H7A0H7F2A0H7C5F2H2H7C5H7H2C5H7F2C5F2C5F2F2H7H7A0";

const ColorPalette =
{
    A: [0xFFFFFF, 0xFFFFAA, 0xFFFF55, 0xFFFF00, 0xFFAAFF, 0xFFAAAA, 0xFFAA55, 0xFFAA00],
    B: [0xFF55FF, 0xFF55AA, 0xFF5555, 0xFF5500, 0xFF00FF, 0xFF00AA, 0xFF0055, 0xFF0000],
    C: [0xAAFFFF, 0xAAFFAA, 0xAAFF55, 0xAAFF00, 0xAAAAFF, 0xAAAAAA, 0xAAAA55, 0xAAAA00],
    D: [0xAA55FF, 0xAA55AA, 0xAA5555, 0xAA5500, 0xAA00FF, 0xAA00AA, 0xAA0055, 0xAA0000],
    E: [0x55FFFF, 0x55FFAA, 0x55FF55, 0x55FF00, 0x55AAFF, 0x55AAAA, 0x55AA55, 0x55AA00],
    F: [0x5555FF, 0x5555AA, 0x555555, 0x555500, 0x5500FF, 0x5500AA, 0x550055, 0x550000],
    G: [0x00FFFF, 0x00FFAA, 0x00FF55, 0x00FF00, 0x00AAFF, 0x00AAAA, 0x00AA55, 0x00AA00],
    H: [0x0055FF, 0x0055AA, 0x005555, 0x005500, 0x0000FF, 0x0000AA, 0x000055, 0x000000],
};

function tableColorToName(color, table_name)
{
    let colors = ColorPalette[table_name];

    for (let index = 0; index < colors.length; index++)
    {
        let table_color = colors[index];

        if (color == table_color)
        {
            let color_name = table_name + index.toString();
            return color_name;
        }
    }

    return "";
}

function colorToName(color)
{
    for (let table_name in ColorPalette)
    {
        let color_name = tableColorToName(color, table_name);

        if (color_name.length != 0)
        {
            return color_name;
        }
    }

    return "";
}

function colorNameToColor(color_name)
{
    if (color_name.length != 2)
    {
        return null;
    }

    let color_name_table = color_name.charAt(0);
    let color_name_index = parseInt(color_name.charAt(1), 10);

    for (let table_name in ColorPalette)
    {
        if (table_name == color_name_table)
        {
            let colors = ColorPalette[table_name];
            return colors[color_name_index];
        }
    }

    return null;
}

function isColorNameOddTable(color_name)
{
    if (color_name.length != 2)
    {
        return null;
    }

    let ODD_TABLE_NAMES = ["B", "D", "F", "H"];

    let color_name_table = color_name.charAt(0);

    if (ODD_TABLE_NAMES.includes(color_name_table))
    {
        return true;
    }
    else
    {
        return false;
    }

    return null;
}

function splitThemeCodeToColorNames(code_text)
{
    let color_name_list = [];
    let color_name = "";

    for (let index = 0; index < code_text.length; index++)
    {
        let letter = code_text.charAt(index);

        color_name = color_name + letter;

        if (color_name.length == 2)
        {
            let color = colorNameToColor(color_name);

            if (color != null)
            {
                color_name_list.push(color_name);
            }

            color_name = "";
        }
    }
    
    return color_name_list;
}

function joinColorNamesToThemeCode(color_name_list)
{
    let theme_code = "";

    for (let index = 0; index < color_name_list.length; index++)
    {
        let color_name = color_name_list[index];
        theme_code += color_name;
    }

    return theme_code;
}

class ColorsPanel
{
    constructor()
    {
        this.selectionEnabled = false;

        this.el_table = document.createElement("table");

        this.el_tbody = document.createElement("tbody");
        this.el_table.appendChild(this.el_tbody);

        this.el_tr = document.createElement("tr");
        this.el_tbody.appendChild(this.el_tr);

        let element_colors = document.querySelector("#Colors");
        element_colors.appendChild(this.el_table);
    }

    set selectionEnabled(enabled)
    {
        this.isSelectionEnabled = enabled;

        let colors = document.getElementById("Colors");

        if (enabled)
        {
            colors.removeAttribute("enabled");
        }
        else
        {
            colors.setAttribute("enabled", "false");
        }
    }

    get selectionEnabled()
    {
        return this.isSelectionEnabled;
    }

    createPalette()
    {
        for (let table_name in ColorPalette)
        {
            this.createColorsList(table_name);
        }

        this.addControlPanel();
    }

    createColorsList(table_name)
    {
        let colors = ColorPalette[table_name];

        let ODD_TABLE_NAMES = ["B", "D", "F", "H"];

        let el_td = document.createElement("td");

        for (let index = 0; index < colors.length; index++)
        {
            let color = colors[index];
            let color_name = table_name + index.toString();

            let element_id = "ColorItem_" + color_name;

            let hex_color = colorToHexString(color).toUpperCase();
            let style_text = `background-color: ${hex_color}; color:black`;

            let item_text = `<span>${color_name}</span>`;

            let color_item = document.createElement("div");
            color_item.id = element_id;
            color_item.className = "ColorItem";
            color_item.value = color_name;
            color_item.innerHTML = item_text;
            color_item.style = style_text;
            color_item.title = hex_color;

            if (ODD_TABLE_NAMES.includes(table_name))
            {
                color_item.setAttribute("selectionFrame", "light");
            }
            else
            {
                color_item.setAttribute("selectionFrame", "dark");
            }

            color_item.onclick = function (e)
            {
                ColorsPanel.selectColorItemByColorName(color_name);
                ColorsPanel.onColorItemClicked(color_name);
            };

            el_td.appendChild(color_item);
        }

        this.el_tr.appendChild(el_td);
    }
    
    static resetSelectedColorItems()
    {
        let color_items_list = document.getElementsByClassName("ColorItem");

        for (let index = 0; index < color_items_list.length; index++)
        {
            let color_item = color_items_list[index];
            color_item.removeAttribute("selected");
        }
    }

    static selectColorItemByColorName(color_name)
    {
        if (colorsPanel.selectionEnabled == false)
        {
            return;
        }

        ColorsPanel.resetSelectedColorItems();

        let element_id = "ColorItem_" + color_name;

        let color_items_list = document.getElementsByClassName("ColorItem");

        for (let index = 0; index < color_items_list.length; index++)
        {
            let color_item = color_items_list[index];
            if (color_item.id == element_id)
            {
                color_item.setAttribute("selected", "selected");
            }
        }
    }

    static onColorItemClicked(color_name)
    {
        if (colorsPanel.selectionEnabled == false)
        {
            return;
        }

        designerApp.OnSelectedColorName = color_name;        
    }

    addControlPanel()
    {
        //control panel container
        let container = document.createElement("div");
        container.id = "DIV_ControlPanel";

        let action_1 = this.controlPanelAction_SetAllElementsToColor();

        //add action to container
        container.appendChild(action_1);

        //add container to Colors panel
        let element_colors = document.querySelector("#Colors");
        element_colors.appendChild(container);
    }

    controlPanelAction_SetAllElementsToColor()
    {
        let action = document.createElement("p");
        action.id = "P_SetAllElementsToColor";
        action.innerText = "All elements to selected color";

        let action_button = document.createElement("button");
        action_button.id = "BTN_SetAllElementsToColor";
        action_button.innerText = "SET";

        action_button.onclick = (event) =>
        {
            if (colorsPanel.selectionEnabled == false)
            {
                return;
            }

            watchfacePreview.setAllElementsToColor(designerApp.selectedColorName);
        };

        action.appendChild(action_button);

        return action;
    }
}
