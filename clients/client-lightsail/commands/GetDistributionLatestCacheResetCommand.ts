import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetDistributionLatestCacheResetRequest, GetDistributionLatestCacheResetResult } from "../models/index";
import {
  deserializeAws_json1_1GetDistributionLatestCacheResetCommand,
  serializeAws_json1_1GetDistributionLatestCacheResetCommand,
} from "../protocols/Aws_json1_1";
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

export type GetDistributionLatestCacheResetCommandInput = GetDistributionLatestCacheResetRequest;
export type GetDistributionLatestCacheResetCommandOutput = GetDistributionLatestCacheResetResult & __MetadataBearer;

export class GetDistributionLatestCacheResetCommand extends $Command<
  GetDistributionLatestCacheResetCommandInput,
  GetDistributionLatestCacheResetCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDistributionLatestCacheResetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDistributionLatestCacheResetCommandInput, GetDistributionLatestCacheResetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: GetDistributionLatestCacheResetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDistributionLatestCacheResetResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetDistributionLatestCacheResetCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetDistributionLatestCacheResetCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetDistributionLatestCacheResetCommandOutput> {
    return deserializeAws_json1_1GetDistributionLatestCacheResetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
