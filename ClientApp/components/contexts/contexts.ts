import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import * as _ from 'lodash';

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
    metaFields: any = null;
    
    fieldsToExpand: Array<string> = [];
    
    @Prop()
    model: any;
    
    @Watch('metaFields')
    onMetaFieldsChanged(value: any, oldValue: any) {
        this.fieldsToExpand = [];
        if (value.indexOf(';') !== -1)
            this.fieldsToExpand = value.split(';');
        this.expandFields();
    }
    
    @Watch('model.contexts')
    onModelChanged(value: any, oldValue: any) {
        this.expandFields();
    }
    
    expandFields(){
        this.fields = this.originalFields.slice(0);

        if (this.fieldsToExpand.length != 0){
            _.forEach(this.fieldsToExpand, (f: string) => {
                this.fields.push({
                    key: f,
                    sortable: true,
                    class: 'w-25'
                });
                _.forEach(this.model.contexts, (c: any) => {
                    if (c.Meta[f])
                        c[f] = c.Meta[f];
                    else
                        c[f] = 'Nan'
                })
            });
        }
    }

    get totalRows () {
        if (this.model)
            return this.model.contexts.length;
        return 0;
    }

    originalFields: Array<any> = [{
        key: 'Id', sortable: true, class: 'w-100'
    }, {
        key: 'InProcessing', sortable: true, class: 'w-25'
    }, {
        key: 'ProcessingStart', sortable: true, class: 'w-50'
    }, {
        key: 'Step', sortable: true, class: 'w-25'
    }];

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
