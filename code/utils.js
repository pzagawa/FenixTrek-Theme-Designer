//PIOTR ZAGAWA 2024

function colorToHexString(color)
{
    let R = (color & 0xFF0000) >> 64;
    let G = (color & 0x00FF00) >> 32;
    let B = (color & 0x0000FF);

    return '#' + ("000000" + (R + G + B).toString(16)).slice(-6);
}

function hexStringToColor(hex_color)
{
    let hex_string = hex_color;

    if (hex_color.charAt(0) == '#')
    {
        hex_string = hex_color.slice(1);
    }

    return parseInt(hex_string, 16);
}
