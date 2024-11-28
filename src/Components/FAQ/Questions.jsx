import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
export default function Questions() {
    return (
        <div className="mt-10">
            <Accordion allowZeroExpanded={true} allowMultipleExpanded={true}>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Are all the templates easy customizable?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Yes, they all are. Lorem ipsum dolor sit amet
                            consectetur, adipisicing elit. Unde quae harum
                            molestias eius recusandae aspernatur facere quis!
                            Officiis dolore debitis enim nostrum, explicabo vero
                            iste a laboriosam aut aperiam nemo.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            How long do you usually support an standalone
                            template for?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            In ad velit in ex nostrud dolore cupidatat
                            consectetur ea in ut nostrud velit in irure cillum
                            tempor laboris sed adipisicing eu esse duis nulla
                            non.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                {/*  */}
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            What kind of payment methods do you accept?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            In ad velit in ex nostrud dolore cupidatat
                            consectetur ea in ut nostrud velit in irure cillum
                            tempor laboris sed adipisicing eu esse duis nulla
                            non.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                {/*  */}
                {/*  */}
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Is there a subscribption service to get the latest
                            templates?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            In ad velit in ex nostrud dolore cupidatat
                            consectetur ea in ut nostrud velit in irure cillum
                            tempor laboris sed adipisicing eu esse duis nulla
                            non.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                {/*  */}
                {/*  */}
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Are the templates compatible with React?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            In ad velit in ex nostrud dolore cupidatat
                            consectetur ea in ut nostrud velit in irure cillum
                            tempor laboris sed adipisicing eu esse duis nulla
                            non.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                {/*  */}
                {/*  */}
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Do you really support Internet Explorer 11?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            In ad velit in ex nostrud dolore cupidatat
                            consectetur ea in ut nostrud velit in irure cillum
                            tempor laboris sed adipisicing eu esse duis nulla
                            non.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                {/*  */}
            </Accordion>
        </div>
    );
}
