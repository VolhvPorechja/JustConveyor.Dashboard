import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';


@Component({
    props: {
        'model': Object
    }
})
export default class ContextsComponent extends Vue {
    perPage: number = 5;
    currentPage: number = 1;
    filter: any = null;
    pageOptions: Array<any> = [{text: 5, value: 5}, {text: 10, value: 10}, {text: 15, value: 15}];
    
    @Prop()
    model: any;
    
    @Watch('model')
    onModelChanged(value: any, oldValue: any) {
        
    }

    get totalRows () {
        if (this.model)
            return this.model.contexts.length;
        return 0;
    }

    fields: Array<any> = [{
        key: 'Id', sortable: true, class: 'w-100'
    }, {
        key: 'InProcessing', sortable: true, class: 'w-25'
    }, {
        key: 'ProcessingStart', sortable: true, class: 'w-50'
    }, {
        key: 'Step', sortable: true, class: 'w-25'
    }];

    onFiltered(filteredItems: Array<any>) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.currentPage = 1;
    }
}
