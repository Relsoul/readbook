/**
 * Created by soul on 10/03/2016.
 */
//tag filter in landing page
var TagFilter = function() {
    this.setLocalVar();
    this.bindEvents();
    this.setStateByHash();
};

TagFilter.prototype = {
    //set all local variables
    setLocalVar: function() {
        this.parentTags = $('.taxonomies-area .parent-item li');
        this.subtems = $('.taxonomies-area ul.sub-item');
        this.subtem = $('.taxonomies-area ul.sub-item li');
        this.hashString = window.location.hash.substr(1);
    },

    //Bind events for all relatived elements
    bindEvents: function() {
        this.parentTags.click($.proxy(this.updateTagState, this));
        this.subtem.click($.proxy(this.updateItemState, this));
    },

    //set the initialized result based on hash value in url
    setStateByHash: function() {
        if (this.hashString) {
            var $item = this.subtem.filter("[data-value='" + this.hashString + "']");
            var parent_string  = $item.closest('.sub-item').data('parent');
            var $parent = this.parentTags.filter("[data-type='" + parent_string + "']");
            $parent.trigger('click');
            $item.trigger('click');
        }
    },

    //make all tabs back to initial state, only 'all' is selected.
    clear: function() {
        this.subtems.each(function(){
            $(this).find('.all').addClass('active').siblings().removeClass('active');
        });
    },

    //select a item, only change style, will not trigger any event.
    updateTagState: function(e) {
        var $this = $(e.currentTarget);
        var tagType = $this.data('type');
        this.parentTags.removeClass('active');
        this.subtems.removeClass('active');
        $this.addClass('active');
        this.subtems.filter("[data-parent='"+tagType+"']").addClass('active');
    },

    //select one item from one tag, and clear selected item from other tags.
    updateItemState: function(e) {
        var $this = $(e.currentTarget);
        var tagValue = $this.data('value');
        var tagType = $this.closest('.sub-item').data('parent');
        e.preventDefault();
        this.clear();
        $this.addClass('active').siblings().removeClass('active');

        this.setURL(tagValue);
        this.getNewCases(tagValue);

    },

    //add parameter in URL accordingly current selected item&tag
    setURL: function(item) {
        window.location.hash = '#'+item;
    },

    //get new case studies by ajax request
    getNewCases: function(tagValue) {
        $.ajax({
            url: wordpress_value.site_url+'/wp-content/themes/frogdesign-4-wp-theme/inc/ajax.php',
            type: 'POST',
            dataType: 'html',
            data: {'query_type':'more_case_study','work_page':'','taxonomy_type' : tagValue},

            success: function(data, status) {
                $('.case-study-list-area').html($($.parseHTML(data)));
            },
            error: function(xhr, desc, err) {
                // console.log(xhr);
                // console.log("Details: " + desc + "\nError:" + err);
            }
        });
    }
};