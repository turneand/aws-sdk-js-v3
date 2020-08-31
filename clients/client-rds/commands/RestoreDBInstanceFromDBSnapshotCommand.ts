import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { RestoreDBInstanceFromDBSnapshotMessage, RestoreDBInstanceFromDBSnapshotResult } from "../models/index";
import {
  deserializeAws_queryRestoreDBInstanceFromDBSnapshotCommand,
  serializeAws_queryRestoreDBInstanceFromDBSnapshotCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type RestoreDBInstanceFromDBSnapshotCommandInput = RestoreDBInstanceFromDBSnapshotMessage;
export type RestoreDBInstanceFromDBSnapshotCommandOutput = RestoreDBInstanceFromDBSnapshotResult & __MetadataBearer;

export class RestoreDBInstanceFromDBSnapshotCommand extends $Command<
  RestoreDBInstanceFromDBSnapshotCommandInput,
  RestoreDBInstanceFromDBSnapshotCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RestoreDBInstanceFromDBSnapshotCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RestoreDBInstanceFromDBSnapshotCommandInput, RestoreDBInstanceFromDBSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: RestoreDBInstanceFromDBSnapshotMessage.filterSensitiveLog,
      outputFilterSensitiveLog: RestoreDBInstanceFromDBSnapshotResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: RestoreDBInstanceFromDBSnapshotCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryRestoreDBInstanceFromDBSnapshotCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RestoreDBInstanceFromDBSnapshotCommandOutput> {
    return deserializeAws_queryRestoreDBInstanceFromDBSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
