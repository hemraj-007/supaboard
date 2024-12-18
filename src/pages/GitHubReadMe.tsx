import React, { useEffect, useState } from "react";

const GitHubReadMe: React.FC = () => {
    const [readme, setReadme] = useState<string | null>(null);

    useEffect(() => {
        fetch("https://api.github.com/repos/your-username/your-repo/readme", {
            headers: { Accept: "application/vnd.github.v3.raw" },
        })
            .then((res) => res.text())
            .then(setReadme)
            .catch(console.error);
    }, []);

    return <div className="prose p-4">{readme ? <pre>{readme}</pre> : <p>Loading...</p>}</div>;
};

export default GitHubReadMe;
