import { render, fireEvent } from "@testing-library/react";
import  Container from "./Container";

describe(Container, () => {


    it("Container should display correct initial text", () => {
        const { getByTestId } = render(<Container initialText = {""}/>);
        const changeTextEmpty = getByTestId("text").textContent;
        expect(changeTextEmpty).toEqual("");
    });

    it("Container should convert to Uppercase text, when 'to UpperCase' button is clicked", () => {
        const { getByTestId, getByRole } = render(<Container initialText = {""}/>);
      
        const upperCaseBtn = getByRole("button", { name: "to UpperCase"});
        const changeTextUC = getByTestId("text").textContent;
        expect(changeTextUC).toEqual("");
        fireEvent.click(upperCaseBtn);
        const changeTextUC2 = getByTestId("text").textContent;
        expect(changeTextUC2).toEqual("");
    });

    it("Container should convert to Lowercase text, when 'to Lowercase' button is clicked", () => {
        const { getByTestId, getByRole } = render(<Container initialText = {""}/>);
      
        const lowerCaseBtn = getByRole("button", { name: "to LowerCase"});
        const changeTextLC = getByTestId("text").textContent;
        expect(changeTextLC).toEqual("");
        fireEvent.click(lowerCaseBtn);
        const changeTextLC2 = getByTestId("text").textContent;
        expect(changeTextLC2).toEqual("");
    });

    it("Container should convert to CapitalizedCase text, when 'to CapitalizedCase' button is clicked", () => {
        const { getByTestId, getByRole } = render(<Container initialText = {""}/>);
      
        const CapitalizedCaseBtn = getByRole("button", { name: "to Capitalized Case"});
        const changeTextCC = getByTestId("text").textContent;
        expect(changeTextCC).toEqual("");
        fireEvent.click(CapitalizedCaseBtn);
        const changeTextCC2 = getByTestId("text").textContent;
        expect(changeTextCC2).toEqual("");
    });

    it("Container should convert to alternate uppercase text, when 'to Alternate Uppercase' button is clicked", () => {
        const { getByTestId, getByRole } = render(<Container initialText = {""}/>);
      
        const AlternateupperCaseBtn = getByRole("button", { name: "to Alternate UpperCase"});
        const changeTextAUC = getByTestId("text").textContent;
        expect(changeTextAUC).toEqual("");
        fireEvent.click(AlternateupperCaseBtn);
        const changeTextAUC2 = getByTestId("text").textContent;
        expect(changeTextAUC2).toEqual("");
    });

    it("Container should convert to Reverse text, when 'Reverse' button is clicked", () => {
        const { getByTestId, getByRole } = render(<Container initialText = {""}/>);
      
        const ReverseCaseBtn = getByRole("button", { name: "Reverse"});
        const changeTextReverse = getByTestId("text").textContent;
        expect(changeTextReverse).toEqual("");
        fireEvent.click(ReverseCaseBtn);
        const changeTextReverse2 = getByTestId("text").textContent;
        expect(changeTextReverse2).toEqual("");
    });

    it("Container should Flip the text, when 'Flip Text' button is clicked", () => {
        const { getByTestId, getByRole } = render(<Container initialText = {""}/>);
      
        const FlipBtn = getByRole("button", { name: "Flip text"});
        const changeTextFlip = getByTestId("text").textContent;
        expect(changeTextFlip).toEqual("");
        fireEvent.click(FlipBtn);
        const changeTextFlip2 = getByTestId("text").textContent;
        expect(changeTextFlip2).toEqual("");
    });
   
    it("Container should Clear the Preview section, when 'Clear' button is clicked", () => {
        const { getByTestId, getByRole } = render(<Container initialText = {""}/>);
      
        const ClearBtn = getByRole("button", { name: "Clear"});
        const changeTextClear = getByTestId("text").textContent;
        expect(changeTextClear).toEqual("");
        fireEvent.click(ClearBtn);
        const changeTextClear2 = getByTestId("text").textContent;
        expect(changeTextClear2).toEqual("");
    });

    it("Container should Copy the text in Preview section, when 'Copy text' button is clicked", () => {
        const { getByTestId, getByRole } = render(<Container initialText = {""}/>);
      
        // const coptTextBtn = getByRole("button", { name: "Copy text"});
        const changeTextCopy = getByTestId("text").textContent;
        expect(changeTextCopy).toEqual("");
        // fireEvent.click(coptTextBtn);
        // const changeTextCopy2 = getByTestId("text").textContent;
        // expect(changeTextCopy2).toEqual("");
    });

    it("Container should Speak the text in Preview section, when 'Speak' button is clicked", () => {
        const { getByTestId, getByRole } = render(<Container initialText = {""}/>);
      
        // const speakBtn = getByRole("button", { name: "Speak"});
        const changeTextSpeak = getByTestId("text").textContent;
        expect(changeTextSpeak).toEqual("");
        // fireEvent.click(speakBtn);
        // const changeTextSpeak2 = getByTestId("text").textContent;
        // expect(changeTextSpeak2).toEqual("");
    });



});