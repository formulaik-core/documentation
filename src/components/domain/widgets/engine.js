import { Helmet } from "react-helmet"
import React from "react"

export default props => {
    const { id, size = 's', mode = "default" } = props
    return <div className="mb-6">
        <div id={id}
            data-id={id}
            data-mode={mode}
            class="formulaik-engine-widget"
        // style="width: 250px; margin: auto; margin-top: 20px"
        >
            <h4>{`Engine ${id}`}</h4>
        </div>
        <Helmet>
            {/* <link href={process.env.WIDGETS_STYLE_URL} rel="stylesheet" />
            <script async src={process.env.WIDGETS_JS_URL}></script> */}
            <link href="https://cdn.formulaik.app/widgets/feature/index.css" rel="stylesheet" />
            <script async src="https://cdn.formulaik.app/widgets/feature/index.js"></script>
            {/* <link href="http://localhost:3080/widget/index.css" rel="stylesheet" />
            <script async src="http://localhost:3080/widget/index.js"></script> */}
        </Helmet>
    </div>
}