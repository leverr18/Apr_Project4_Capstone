var viz;

$(document).ready(function() {
    initializeViz();

    $("#pdf").click(function() {
        exportPDF();
    });
    $("#image").click(function() {
        exportImage();
    });
    $("#crosstab").click(function() {
        exportCrossTab();
    });
    $("#data").click(function() {
        exportData();
    });
    $("#revert").click(function() {
        revertAll();
    });
});

// Initialize the Tableau visualization
function initializeViz() {
    var placeholderDiv = document.getElementById("tableauViz");
    var url = "https://public.tableau.com/views/UberVsLyft_17440452145440/Story1_1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link";  // Your Tableau URL
    var options = {
        hideTabs: true,
        hideToolbar: true,
        onFirstInteractive: function() {
            console.log("Tableau 2 visualization is now interactive!");
        }
    };

    try {
        viz = new tableau.Viz(placeholderDiv, url, options); // Initialize the Tableau viz
        console.log("Viz successfully initialized.");
    } catch (e) {
        console.error("Error loading Tableau viz:", e);
    }
}

// Export as PDF
function exportPDF() {
    console.log("Export PDF button clicked");
    if (viz) {
        try {
            viz.showExportPDFDialog(); // Trigger export PDF dialog
        } catch (e) {
            console.error("Error exporting PDF:", e);
        }
    } else {
        console.error("Tableau visualization not loaded.");
    }
}

// Export as Image
function exportImage() {
    console.log("Export Image button clicked");
    if (viz) {
        try {
            viz.showExportImageDialog(); // Trigger export image dialog
        } catch (e) {
            console.error("Error exporting Image:", e);
        }
    } else {
        console.error("Tableau visualization not loaded.");
    }
}

// Export as Crosstab (Data Table)
function exportCrossTab() {
    console.log("Export Crosstab button clicked");
    if (viz) {
        try {
            viz.showExportCrossTabDialog(); // Trigger export Crosstab dialog
        } catch (e) {
            console.error("Error exporting Crosstab:", e);
        }
    } else {
        console.error("Tableau visualization not loaded.");
    }
}

// Export Data (CSV or similar format)
function exportData() {
    console.log("Export Data button clicked");
    if (viz) {
        try {
            viz.showExportDataDialog(); // Trigger export data dialog
        } catch (e) {
            console.error("Error exporting Data:", e);
        }
    } else {
        console.error("Tableau visualization not loaded.");
    }
}

// Revert all changes in Tableau workbook
function revertAll() {
    console.log("Revert All button clicked");
    if (viz) {
        try {
            var workbook = viz.getWorkbook();
            workbook.revertAllAsync(); // Revert all changes asynchronously
        } catch (e) {
            console.error("Error reverting all:", e);
        }
    } else {
        console.error("Tableau visualization not loaded.");
    }
}
