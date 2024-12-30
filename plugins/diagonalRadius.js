const plugin = require("tailwindcss/plugin");

const diagonalRadius = plugin(function ({
  addUtilities,
  matchUtilities,
  theme,
  e,
}) {
  const borderRadiusValues = theme("borderRadius");
  const newUtilityClasses = Object.keys(borderRadiusValues).reduce(
    (classes, key) => {
      const value = borderRadiusValues[key];

      classes[`.${e(`rounded-tlbr-${key}`)}`] = {
        borderTopLeftRadius: value,
        borderBottomRightRadius: value,
      };

      classes[`.${e(`rounded-bltr-${key}`)}`] = {
        borderBottomLeftRadius: value,
        borderTopRightRadius: value,
      };

      return classes;
    },
    {}
  );

  addUtilities(newUtilityClasses);
  matchUtilities({
    "rounded-tlbr": (value) => ({
      borderTopLeftRadius: value,
      borderBottomRightRadius: value,
    }),
    "rounded-bltr": (value) => ({
      borderBottomLeftRadius: value,
      borderTopRightRadius: value,
    }),
  });
});

module.exports = diagonalRadius;
