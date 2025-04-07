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

function initializeViz() {
    var placeholderDiv = document.getElementById("tableauViz");
    var url = "https://public.tableau.com/views/UberVsLift/Sheet4";  // Your second Tableau link
    var options = {
        hideTabs: true,
        hideToolbar: true,
        onFirstInteractive: function() {
            console.log("Tableau 2 visualization is now interactive!");
        }
    };

    try {
        viz = new tableau.Viz(placeholderDiv, url, options);
    } catch (e) {
        console.error("Error loading Tableau viz:", e);
    }
}

function exportPDF() {
    try {
        viz.showExportPDFDialog();
    } catch (e) {
        console.error("Error exporting PDF:", e);
    }
}

function exportImage() {
    try {
        viz.showExportImageDialog();
    } catch (e) {
        console.error("Error exporting Image:", e);
    }
}

function exportCrossTab() {
    try {
        viz.showExportCrossTabDialog();
    } catch (e) {
        console.error("Error exporting Crosstab:", e);
    }
}

function exportData() {
    try {
        viz.showExportDataDialog();
    } catch (e) {
        console.error("Error exporting Data:", e);
    }
}

function revertAll() {
    try {
        var workbook = viz.getWorkbook();
        workbook.revertAllAsync();
    } catch (e) {
        console.error("Error reverting all:", e);
    }
}
