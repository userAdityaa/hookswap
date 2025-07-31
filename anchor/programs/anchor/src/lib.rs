use anchor_lang::prelude::*;

declare_id!("7r44U5rpwoW7hwjVfmMYbj5XWKGeuD84m3ruPF35FE7X");

#[program]
pub mod anchor {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
