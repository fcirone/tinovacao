terraform {
  required_version = ">= 1.6"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  # Before running terraform init, create the state bucket manually:
  #   aws s3 mb s3://<your-state-bucket> --region us-east-1
  #   aws s3api put-bucket-versioning \
  #     --bucket <your-state-bucket> \
  #     --versioning-configuration Status=Enabled
  backend "s3" {
    bucket  = "fabiocirone-tf-state"
    key     = "portfolio/terraform.tfstate"
    region  = "us-east-1"
    profile = "pessoal"
  }
}
