import { useState, useLayoutEffect, FC, ReactElement } from "react";
import { createWrapperAndAppendToBoddy } from "../../helpers";
import { createPortal } from "react-dom";

interface PortalProps {
    children: ReactElement;
    wrapperId?: string;
}

const Portal: FC<PortalProps> = ({ wrapperId = "portal-wrapper", children }) => {
    const [wrapperElement, setWrapperElement] = useState<Element | DocumentFragment>();

    useLayoutEffect(() => {
        let element = document.getElementById(wrapperId);
        let systemCreated = false;

        if (!element) {
            systemCreated = true;
            element = createWrapperAndAppendToBoddy(wrapperId);
        }

        setWrapperElement(element);

        return () => {
            if (systemCreated && element?.parentNode) {
                element.parentNode.removeChild(element);
            }
        };
    }, [wrapperId]);

    if (!wrapperElement) return null;

    return createPortal(children, wrapperElement);
};

export default Portal;
