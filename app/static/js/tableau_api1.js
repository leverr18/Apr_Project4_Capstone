var viz, workbook;  // Declare both globally

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
    var url = "https://public.tableau.com/views/UberVs_LyftAnalysis/Sheet2";  // Corrected URL
    var options = {
        hideTabs: true,
        hideToolbar: true,
        onFirstInteractive: function() {
            workbook = viz.getWorkbook();
            var activeSheet = workbook.getActiveSheet();
        }
    };
    viz = new tableau.Viz(placeholderDiv, url, options);
}

function exportPDF() {
    viz.showExportPDFDialog();
}

function exportImage() {
    viz.showExportImageDialog();
}

function exportCrossTab() {
    viz.showExportCrossTabDialog();
}

function exportData() {
    viz.showExportDataDialog();
}

function revertAll() {
    if (workbook) {
        workbook.revertAllAsync();
    } else {
        console.error("Workbook is not initialized yet.");
    }
}
