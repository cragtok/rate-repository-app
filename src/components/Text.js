import { Text as NativeText, StyleSheet } from "react-native";

import theme from "../theme";

const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal,
    },
    colorTextSecondary: {
        color: theme.colors.textSecondary,
    },
    colorPrimary: {
        color: theme.colors.primary,
    },
    colorLight: {
        color: theme.colors.textLight,
    },
    fontSizeSubheading: {
        fontSize: theme.fontSizes.subheading,
    },
    fontSizeLarge: {
        fontSize: theme.fontSizes.large,
    },
    fontWeightBold: {
        fontWeight: theme.fontWeights.bold,
    },
});

const Text = ({ color, fontSize, fontWeight, style, ...props }) => {
    const textStyle = [
        styles.text,
        color === "textSecondary" && styles.colorTextSecondary,
        color === "primary" && styles.colorPrimary,
        color === "textLight" && styles.colorLight,
        fontSize === "subheading" && styles.fontSizeSubheading,
        fontSize === "large" && styles.fontSizeLarge,
        fontWeight === "bold" && styles.fontWeightBold,
        style,
    ];

    return <NativeText style={textStyle} {...props} />;
};

export default Text;
