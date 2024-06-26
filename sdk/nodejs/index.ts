// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

// Export members:
export { NsArgs, NsState } from "./ns";
export type Ns = import("./ns").Ns;
export const Ns: typeof import("./ns").Ns = null as any;
utilities.lazyLoad(exports, ["Ns"], () => require("./ns"));

export { ProviderArgs } from "./provider";
export type Provider = import("./provider").Provider;
export const Provider: typeof import("./provider").Provider = null as any;
utilities.lazyLoad(exports, ["Provider"], () => require("./provider"));

export { RecordArgs, RecordState } from "./record";
export type Record = import("./record").Record;
export const Record: typeof import("./record").Record = null as any;
utilities.lazyLoad(exports, ["Record"], () => require("./record"));


// Export sub-modules:
import * as config from "./config";

export {
    config,
};

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "namecheap:index/ns:Ns":
                return new Ns(name, <any>undefined, { urn })
            case "namecheap:index/record:Record":
                return new Record(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("namecheap", "index/ns", _module)
pulumi.runtime.registerResourceModule("namecheap", "index/record", _module)
pulumi.runtime.registerResourcePackage("namecheap", {
    version: utilities.getVersion(),
    constructProvider: (name: string, type: string, urn: string): pulumi.ProviderResource => {
        if (type !== "pulumi:providers:namecheap") {
            throw new Error(`unknown provider type ${type}`);
        }
        return new Provider(name, <any>undefined, { urn });
    },
});
