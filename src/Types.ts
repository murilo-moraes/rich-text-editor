export enum Style {
    Bold, Italic, Underscore
}

export enum Tag {
    Paragraph, Header
}

export type ControlType = {
    id: string;
    tag: Tag;
    text: string;
    styles: Style[];
    selected: boolean;
}

function styleToCssClass(style: Style): string {
    switch (style) {
        case Style.Bold: return "bold";
        case Style.Italic: return "italic"
        case Style.Underscore: return "underscore";
    }
}

export function renderControlClasses(control: ControlType): string {
    return control.styles.map(styleToCssClass).join(' ');
}