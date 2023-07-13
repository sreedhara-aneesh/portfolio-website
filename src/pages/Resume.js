import DefaultHeader from "../components/DefaultHeader/DefaultHeader";
import {Button} from "react-bootstrap";

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

pdfMake.fonts = {
    lato: {
        normal: "https://raw.githubusercontent.com/google/fonts/main/ofl/lato/Lato-Regular.ttf",
        bold: "https://raw.githubusercontent.com/google/fonts/main/ofl/lato/Lato-Bold.ttf",
        italics: "https://raw.githubusercontent.com/google/fonts/main/ofl/lato/Lato-Italic.ttf",
        bolditalics: "https://raw.githubusercontent.com/google/fonts/main/ofl/lato/Lato-BoldItalic.ttf"
    }
}

const Resume = ({userProfile}) => {

    const style = {
        wrapper: {
            padding: "2em 0 6em 0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }
    }

    const makeDocDefinition = (userProfile) => {

        const months = [null, 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        const docDefinition = {
            content: [
                {
                    text: userProfile.basics.name.toUpperCase(),
                    bold: "true",
                    alignment: "center",
                    fontSize: 15
                },
                {
                    text: [userProfile.basics.email, userProfile.basics.phone].join(" • "),
                    alignment: "center",
                    margin: [0, 5, 0, 0]
        
                },
                {
                    text: userProfile.basics.profiles
                        .filter(p => p.network == "LinkedIn")
                        .map(p => p.url)
                        .concat([userProfile.basics.website])
                        .filter(l => l !== null)
                        .map(l => l.slice(0, 8) === "https://" ? l.slice(8) : l.slice(0, 7) === "http://" ? l.slice(7) : l)
                        .join(" • "),
                    alignment: "center",
                },
            {
                text: userProfile.basics.summary,
                margin: [0, 10, 0, 0]
            },
                {
                    table: {
                        headerRows: 1,
                        widths: ["*", "auto"],
                        body: (() => {
                            const section = []
                            section.push([
                                {
                                    text: "EXPERIENCE",
                                    bold: "true",
                                    colSpan: 2
                                },
                                {}
                            ]);
                            userProfile.work.forEach(w => {
                                section.push([
                                    {
                                        text: w.position,
                                        bold: "true",
                                        margin: [0, 5, 0, 0]
                                    },
                                    {
                                        // This can break easily
                                        text: `${months[w.start.month]} ${w.start.year}` + (w.end?.month ? ` - ${months[w.end.month]} ${w.end.year}` : " - Present"),
                                        margin: [0, 5, 0, 0],
                                        alignment: "right"
                                    }
                                ]);
                                section.push([
                                    {
                                        text: `${w.name}`
                                    },
                                    {
                                        text: `${w.location}`,
                                        alignment: "right"
                                    },
                                ]);
                                section.push([
                                    {
                                        ul: w.highlights,
                                        colSpan: 2
                                    },
                                    {}
                                ])
                            })
                            return section;
                        })()
                    },
                    margin: [0, 10, 0, 0],
                    layout: "headerLineOnly"
                },
                {
                    table: {
                        headerRows: 1,
                        widths: ["*", "auto"],
                        body: (() => {
                            const section = []
                            section.push([
                                {
                                    text: "EDUCATION",
                                    bold: "true",
                                    colSpan: 2
                                },
                                {}
                            ]);
                            userProfile.education.forEach(w => {
                                section.push([
                                    {
                                        text: w.studyType + (w.area ? ` in ${w.area}` : ""),
                                        bold: "true",
                                        margin: [0, 5, 0, 0]
                                    },
                                    {
                                        // This can break easily
                                        text: `${months[w.start.month]} ${w.start.year}` + (w.end?.month ? ` - ${months[w.end.month]} ${w.end.year}` : " - Present"),
                                        margin: [0, 5, 0, 0],
                                        alignment: "right"
                                    }
                                ]);
                                section.push([
                                    {
                                        text: `${w.institution}`,
                                        colSpan: 2
                                    },
                                    {}
                                ]);
                            })
                            return section;
                        })()
                    },
                    margin: [0, 10, 0, 0],
                    layout: "headerLineOnly"
                },
                {
                    table: {
                        headerRows: 1,
                        widths: ["*", "auto"],
                        body: (() => {
                            const section = []
                            section.push([
                                {
                                    text: "PROJECTS",
                                    bold: "true",
                                    colSpan: 2
                                },
                                {}
                            ]);
                            userProfile.projects.forEach(w => {
                                section.push([
                                    {
                                        text: w.displayName,
                                        bold: "true",
                                        margin: [0, 5, 0, 0],
                                        colSpan: 2
                                    },
                                    {}
                                ]);
                                section.push([
                                    {
                                        text: w.repositoryUrl.slice(0, 8) === "https://" ? w.repositoryUrl.slice(8) : w.repositoryUrl.slice(0, 7) === "http://" ? w.repositoryUrl.slice(7) : w.repositoryUrl,
                                        colSpan: 2
                                    },
                                    {}
                                ]);
                                section.push([
                                    {
                                        text: w.summary,
                                        colSpan: 2
                                    },
                                    {}
                                ]);
                            })
                            return section;
                        })()
                    },
                    margin: [0, 10, 0, 0],
                    layout: "headerLineOnly"
                },
                {
                    table: {
                        headerRows: 1,
                        widths: ["*", "auto"],
                        body: [
                            [
                                {
                                    text: "SKILLS",
                                    bold: "true",
                                    colSpan: 2
                                },
                                {}
                            ],
                            [
                                {
                                    text: userProfile.skills.map(s => s.name).join(" | "),
                                    margin: [0, 5, 0, 0],
                                    colSpan: 2
                                },
                                {}
                            ]
                        ]
                    },
                    margin: [0, 10, 0, 0],
                    layout: "headerLineOnly"
                },
                
            ],
            defaultStyle: {
                fontSize: 10,
                font: "lato"
            },
            pageSize: "LETTER",
            info: {
                title: `${userProfile.basics.name} Resume`,
                author: `${userProfile.basics.name}`,
                subject: `Resume for ${userProfile.basics.name}`,
                keywords: `${userProfile.basics.name.split(" ").join(", ")}, Resume`
            }
        }

        return docDefinition;
    }

    return (
        <>
            <DefaultHeader title={"Resume"}/>
            <div style={style.wrapper}>
                <Button onClick={() => pdfMake.createPdf(makeDocDefinition(userProfile)).download(`${userProfile.basics.name.split(" ").join("_")}_Resume`)}>Download Resume</Button>
                <a href={`https://gitconnected.com/${userProfile?.basics.username}/resume`} style={{marginTop: "1em"}}>
                    <Button variant="secondary">View Alternate</Button>
                </a>
            </div>
        </>
    )
}

export default Resume;