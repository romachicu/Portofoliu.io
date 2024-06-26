$(document).ready(function () {
    $("#country-select").select2({
        templateResult: formatState,
        templateSelection: formatState,
    });

    function formatState(state) {
        if (!state.id) {
            return state.text;
        }
        var baseUrl =
            "https://cdnjs.cloudflare.com/ajax/libs/flag-icons/6.6.6/flags/4x3/";
        var $state = $(
            '<span><img src="' +
                baseUrl +
                state.element.value.toLowerCase() +
                '.svg" class="img-flag" /> ' +
                state.text +
                "</span>",
        );
        return $state;
    }
});
