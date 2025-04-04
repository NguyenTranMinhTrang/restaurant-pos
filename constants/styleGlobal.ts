import { StyleSheet } from "react-native";

export const COLORS = {
    primary: '#30A34A',
    secondary: '#5856D6',
    background: '#F3F4F6',
    white: '#FFFFFF',
    black: '#000000',
    gray: '#8E8E93',
    lightGray: '#C7C7CC',
    error: '#FF3B30',
    success: '#34C759',
    icon: '#000000',
    textDark: '#333333',
    textLight: '#666666',
    border: '#E4E4E7',
};

export const SPACING = {
    tiny: 4,
    small: 8,
    medium: 16,
    large: 24,
    xlarge: 32,
};

export const globalStyles = StyleSheet.create({
    full: {
        flex: 1,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
    },
    rowSpaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    column: {
        flexDirection: 'column',
    },
    alignItemsCenter: {
        alignItems: 'center',
    },
    p1: { padding: SPACING.small },
    p2: { padding: SPACING.medium },
    p3: { padding: SPACING.large },
    p4: { padding: SPACING.xlarge },

    px1: { paddingHorizontal: SPACING.small },
    px2: { paddingHorizontal: SPACING.medium },
    px3: { paddingHorizontal: SPACING.large },
    px4: { paddingHorizontal: SPACING.xlarge },

    py1: { paddingVertical: SPACING.small },
    py2: { paddingVertical: SPACING.medium },
    py3: { paddingVertical: SPACING.large },
    py4: { paddingVertical: SPACING.xlarge },

    pl1: { paddingLeft: SPACING.small },
    pl2: { paddingLeft: SPACING.medium },
    pl3: { paddingLeft: SPACING.large },
    pl4: { paddingLeft: SPACING.xlarge },

    pr1: { paddingRight: SPACING.small },
    pr2: { paddingRight: SPACING.medium },
    pr3: { paddingRight: SPACING.large },
    pr4: { paddingRight: SPACING.xlarge },

    pt1: { paddingTop: SPACING.small },
    pt2: { paddingTop: SPACING.medium },
    pt3: { paddingTop: SPACING.large },
    pt4: { paddingTop: SPACING.xlarge },

    pb1: { paddingBottom: SPACING.small },
    pb2: { paddingBottom: SPACING.medium },
    pb3: { paddingBottom: SPACING.large },
    pb4: { paddingBottom: SPACING.xlarge },

    m1: { margin: SPACING.small },
    m2: { margin: SPACING.medium },
    m3: { margin: SPACING.large },
    m4: { margin: SPACING.xlarge },

    mx1: { marginHorizontal: SPACING.small },
    mx2: { marginHorizontal: SPACING.medium },
    mx3: { marginHorizontal: SPACING.large },
    mx4: { marginHorizontal: SPACING.xlarge },

    my1: { marginVertical: SPACING.small },
    my2: { marginVertical: SPACING.medium },
    my3: { marginVertical: SPACING.large },
    my4: { marginVertical: SPACING.xlarge },

    ml1: { marginLeft: SPACING.small },
    ml2: { marginLeft: SPACING.medium },
    ml3: { marginLeft: SPACING.large },
    ml4: { marginLeft: SPACING.xlarge },

    mr1: { marginRight: SPACING.small },
    mr2: { marginRight: SPACING.medium },
    mr3: { marginRight: SPACING.large },
    mr4: { marginRight: SPACING.xlarge },

    mt1: { marginTop: SPACING.small },
    mt2: { marginTop: SPACING.medium },
    mt3: { marginTop: SPACING.large },
    mt4: { marginTop: SPACING.xlarge },

    mb1: { marginBottom: SPACING.small },
    mb2: { marginBottom: SPACING.medium },
    mb3: { marginBottom: SPACING.large },
    mb4: { marginBottom: SPACING.xlarge },

    radius1: { borderRadius: SPACING.small },
    radius2: { borderRadius: SPACING.medium },
    radius3: { borderRadius: SPACING.large },
    radius4: { borderRadius: SPACING.xlarge },
});

const fonts = {
    regular: 'System',
    bold: 'System',
    italic: 'System',
};

export const textStyles = StyleSheet.create({
    base: {
        fontFamily: fonts.regular,
        fontSize: 16,
        color: COLORS.textDark,
        lineHeight: 24,
    },
    // Heading styles
    h1: {
        fontFamily: fonts.bold,
        fontSize: 32,
        fontWeight: '700',
        color: COLORS.textDark,
        lineHeight: 40,
    },
    h2: {
        fontFamily: fonts.bold,
        fontSize: 24,
        fontWeight: '600',
        color: COLORS.textDark,
        lineHeight: 32,
    },
    h3: {
        fontFamily: fonts.bold,
        fontSize: 20,
        fontWeight: '600',
        color: COLORS.textDark,
        lineHeight: 28,
    },
    h4: {
        fontFamily: fonts.bold,
        fontSize: 18,
        fontWeight: '600',
        color: COLORS.textDark,
        lineHeight: 26,
    },
    // Paragraph styles
    body: {
        fontFamily: fonts.regular,
        fontSize: 16,
        color: COLORS.textDark,
        lineHeight: 24,
    },
    bodyLight: {
        fontFamily: fonts.regular,
        fontSize: 16,
        color: COLORS.textLight,
        lineHeight: 24,
    },
    // Caption or smaller text
    caption: {
        fontFamily: fonts.regular,
        fontSize: 14,
        color: COLORS.textLight,
        lineHeight: 20,
    },
    // Error text
    error: {
        fontFamily: fonts.regular,
        fontSize: 14,
        color: COLORS.error,
        lineHeight: 20,
    },
    // Button text
    button: {
        fontFamily: fonts.bold,
        fontSize: 16,
        fontWeight: '600',
        color: COLORS.primary,
        lineHeight: 24,
    },
    // Utility styles (optional)
    bold: {
        fontFamily: fonts.bold,
        fontWeight: '700',
    },
    italic: {
        fontFamily: fonts.italic,
        fontStyle: 'italic',
    },
});
