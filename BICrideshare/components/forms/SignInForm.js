import React, { useState, useRef } from "react";
import FormField from "./FormField";

function SignInForm() {
    const formEl = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        let data = new FormData(formEl.current);
    };

    return (
        <form onSubmit={handleSubmit} ref={formEl}>
            <FormField label="email" type="text" />
            <FormField label="password" type="password" />

            <button type="submit">Submit</button>
        </form>
    );
}

export default SignInForm;
