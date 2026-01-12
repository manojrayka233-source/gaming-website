// Show tools section
function showTools() {
    document.getElementById("tools").style.display = "block";
    window.scrollTo(0, 300);
}

// BGMI Optimizer tool
function optimize() {
    let ram = document.getElementById("ram").value;
    let res = "";

    if (ram <= 3) {
        res = "Graphics: Smooth | FPS: Low | Expected: 30–35 FPS";
    } else if (ram == 4) {
        res = "Graphics: Smooth | FPS: Medium | Expected: 40–45 FPS";
    } else {
        res = "Graphics: Balanced | FPS: High | Expected: 50–60 FPS";
    }

    document.getElementById("result").innerHTML =
        "<b>Recommended BGMI Settings:</b><br>" + res +
        "<br><br>(100% Legal – Apply manually)";
}

// Articles data
const articles = {
    1: `<h2>BGMI Best Sensitivity Settings</h2>
        <p>Agar aap pro jaisi aim chahte ho to camera 3rd person 130% aur ADS 120% rakho.</p>`,

    2: `<h2>Gyro vs Non-Gyro</h2>
        <p>Gyro advanced players ke liye best hota hai, beginners non-gyro se start karein.</p>`,

    3: `<h2>Low End Phone BGMI Tips</h2>
        <p>Graphics Smooth + Extreme rakho, background apps band rakho. Lag free gameplay.</p>`,

    4: `<h2>Best Gaming Tools for Android</h2>
        <p>Game Booster, DNS Changer aur FPS meter ka use karo. Sab legal hai.</p>`,

    5: `<h2>BGMI Battery Saving Tips</h2>
        <p>FPS Low rakho, 90Hz OFF rakho. Battery saver game ke baad ON karo.</p>`
};

// Load article in article.html
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
if(document.getElementById("content")){
    document.getElementById("content").innerHTML = articles[id] || "Article not found";
}