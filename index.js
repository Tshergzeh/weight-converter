const conversions = {
    kg: {
        ton: 0.001,
        kg: 1,
        g: 1000,
        mg: 1000000,
        mcg: 1000000000,
        iton: 0.000984207,
        uston: 0.00110231,
        lb: 2.20462,
        oz: 35.274,
        st: 0.157473
    },
    ton: {
        ton: 1,
        kg: 1000,
        g: 1000000,
        mg: 1000000000,
        mcg: 1000000000000,
        iton: 0.984207,
        uston: 1.10231,
        st: 157.473,
        lb: 2204.62,
        oz: 35274
    },
    g: {
        ton: 0.000001,
        kg: 0.001,
        g: 1,
        mg: 1000,
        mcg: 1000000,
        iton: 0.00000098421,
        uston: 0.0000011023,
        st: 0.000157473,
        lb: 0.00220462,
        oz: 0.035274
    },
    mg: {
        ton: 0.000000001,
        kg: 0.000001,
        g: 0.001,
        mg: 1,
        mcg: 1000,
        iton: 0.00000000098421,
        uston: 0.0000000011023,
        st: 0.00000015747,
        lb: 0.0000022046,
        oz: 0.000035274
    },
    mcg: {
        ton: 0.000000000001,
        kg: 0.000000001,
        g: 0.000001,
        mg: 0.0001,
        mcg: 1,
        iton: 0.00000000000098421,
        uston: 0.0000000000011023,
        st: 0.00000000015747,
        lb: 0.0000000022046,
        oz: 0.000000035274
    },
    iton: {
        ton: 1.01605,
        kg: 1016.05,
        g: 1016000,
        mg: 1016000000,
        mcg: 1016000000000,
        iton: 1,
        uston: 1.12,
        st: 160,
        lb: 2240,
        oz: 35840
    },
    uston: {
        ton: 0.907185,
        kg: 907.185,
        g: 907185,
        mg: 907200000,
        mcg: 907200000000,
        iton: 0.892857,
        uston: 1,
        st: 142.857,
        lb: 2000,
        oz: 32000
    },
    st: {
        st: 1,
        ton: 0.00635029,
        kg: 6.35029,
        g: 6350.29,
        mg: 6350000,
        mcg: 6350000000,
        iton: 0.00625,
        uston: 0.007,
        lb: 14,
        oz: 224
    },
    lb: {
        lb: 1,
        ton: 0.000453592,
        kg: 0.453592,
        g: 453.592,
        mg: 453592,
        mcg: 453600000,
        iton: 0.000446429,
        uston: 0.0005,
        st: 0.0714286,
        oz: 16
    },
    oz: {
        oz: 1,
        ton: 0.00002835,
        kg: 0.0283495,
        g: 28.3495,
        mg: 28349.5,
        mcg: 28350000,
        iton: 0.000027902,
        uston: 0.00003125,
        st: 0.00446429,
        lb: 0.0625
    }
}

const fromInput = document.getElementById('input')
const toInput = document.getElementById('output')
fromInput.addEventListener('input', convert)
toInput.addEventListener('input', convert)


function convert() {
    const fromUnit = document.getElementById('input-unit').value
    const toUnit = document.getElementById('output-unit').value
    const multiplier = conversions[fromUnit][toUnit]
    const result = fromInput.value * multiplier
    let toInput = document.getElementById('output')
    toInput.value =  parseFloat(result.toFixed(4))
    console.log(typeof toInput);
}